import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { runPageSpeed } from './pagespeed';
import { runSEOCrawler } from './crawler';
import { runZAPScan } from './zap';
import { generateRemediationGuide } from './ai';

admin.initializeApp();

const db = admin.firestore();

// === Audit Orchestrator ===
export const onAuditCreated = onDocumentCreated('audit_jobs/{jobId}', async (event) => {
  const jobData = event.data?.data();
  if (!jobData || jobData.status !== 'pending') return;

  const jobRef = event.data?.ref;
  const projectId = jobData.projectId;

  const projectDoc = await db.collection('projects').doc(projectId).get();
  const project = projectDoc.data();
  if (!project) {
    await jobRef?.update({ status: 'failed' });
    return;
  }

  try {
    await jobRef?.update({ status: 'running' });

    // Normalize raw Firestore authSettings into the typed ZAPRunOptions shape.
    // Only forward auth if an explicit authType is set, otherwise pass undefined.
    const rawAuth = project.authSettings as Record<string, string> | undefined;
    const zapAuthSettings = rawAuth?.authType
      ? {
          authType: rawAuth.authType as 'none' | 'basic' | 'session',
          basicAuthUsername: rawAuth.basicAuthUsername,
          basicAuthPassword: rawAuth.basicAuthPassword,
          sessionCookie: rawAuth.sessionCookie,
        }
      : undefined;

    const [performanceResult, seoResult, securityResult] = await Promise.allSettled([
      runPageSpeed(project.targetUrl),
      runSEOCrawler(project.targetUrl, rawAuth || {}),
      runZAPScan({
        targetUrl: project.targetUrl,
        authSettings: zapAuthSettings,
        contextName: project.name?.replace(/[^a-zA-Z0-9_-]/g, '_'),
      }),
    ]);

    // ── Per-bot result extraction ──────────────────────────────────────────
    const perfStatus = performanceResult.status === 'fulfilled' ? 'completed' : 'failed';
    const seoStatus  = seoResult.status  === 'fulfilled' ? 'completed' : 'failed';
    const secStatus  = securityResult.status === 'fulfilled' ? 'completed' : 'failed';

    const performanceSummary = performanceResult.status === 'fulfilled'
      ? { ...performanceResult.value, status: 'completed' as const }
      : { performance: 0, accessibility: 0, seo: 0, bestPractices: 0, status: 'failed' as const };

    const seoSummary = seoResult.status === 'fulfilled'
      ? { ...seoResult.value, status: 'completed' as const }
      : { totalErrors: 0, pageCount: 0, status: 'failed' as const };

    const securitySummary = securityResult.status === 'fulfilled'
      ? { ...securityResult.value, status: 'completed' as const }
      : { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [], status: 'failed' as const };

    // ── Collect per-bot errors ─────────────────────────────────────────────
    const errors: Array<{ bot: string; message: string; retriesLeft: number }> = [];
    if (performanceResult.status === 'rejected') {
      errors.push({ bot: 'performance', message: String(performanceResult.reason), retriesLeft: 0 });
    }
    if (seoResult.status === 'rejected') {
      errors.push({ bot: 'seo', message: String(seoResult.reason), retriesLeft: 0 });
    }
    if (securityResult.status === 'rejected') {
      errors.push({ bot: 'security', message: String(securityResult.reason), retriesLeft: 0 });
    }

    // ── Determine overall job status ───────────────────────────────────────
    const succeededCount = [perfStatus, seoStatus, secStatus].filter(s => s === 'completed').length;
    const overallStatus = succeededCount === 3 ? 'completed'
      : succeededCount === 0 ? 'failed'
      : 'partial-failed';

    // ── Write results using the `summaries` shape the frontend expects ─────
    await jobRef?.update({
      status: overallStatus,
      errors,
      summaries: {
        performance: performanceSummary,
        seo: seoSummary,
        security: securitySummary,
      },
    });

    // ── Auto-generate bugs for significant findings ────────────────────────
    const bugs: Array<{
      projectId: string;
      title: string;
      source: string;
      severity: string;
      description: string;
      status: string;
    }> = [];

    if (performanceSummary.performance < 50) {
      bugs.push({
        projectId,
        title: 'Poor Performance Score',
        source: 'PERFORMANCE',
        severity: 'Critical',
        description: `Performance score is ${performanceSummary.performance}/100. Consider optimizing assets, implementing lazy loading, and reducing server response times.`,
        status: 'Open',
      });
    }

    if (securitySummary.highAlerts > 0) {
      bugs.push({
        projectId,
        title: `${securitySummary.highAlerts} High Risk Security Vulnerabilities`,
        source: 'SECURITY',
        severity: 'Critical',
        description: `${securitySummary.highAlerts} high-risk vulnerabilities were detected. Review and patch immediately.`,
        status: 'Open',
      });
    }

    if (seoSummary.totalErrors > 0) {
      bugs.push({
        projectId,
        title: `${seoSummary.totalErrors} SEO Issues Detected`,
        source: 'SEO',
        severity: seoSummary.totalErrors > 5 ? 'Major' : 'Minor',
        description: `${seoSummary.totalErrors} SEO issues were found across ${seoSummary.pageCount} pages.`,
        status: 'Open',
      });
    }

    // ── Write bugs using atomic bugCounter transaction for shortIds ─────────
    if (bugs.length > 0) {
      const projectRef = db.collection('projects').doc(projectId);
      await db.runTransaction(async (tx) => {
        const projSnap = await tx.get(projectRef);
        let counter = projSnap.data()?.bugCounter || 0;
        tx.update(projectRef, { bugCounter: counter + bugs.length });

        for (const bug of bugs) {
          counter++;
          const bugRef = db.collection('bug_list').doc();
          tx.set(bugRef, {
            ...bug,
            shortId: `QAS-${counter}`,
            tags: [],
            assignees: [],
            commentCount: 0,
            remediationGuide: null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            lastEditedTime: admin.firestore.FieldValue.serverTimestamp(),
          });
        }
      });
    }

  } catch (error) {
    console.error('Audit failed:', error);
    await jobRef?.update({ status: 'failed' });
  }
});

export const triggerAudit = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { projectId } = request.data;
  if (!projectId) {
    throw new HttpsError('invalid-argument', 'Project ID is required');
  }

  const projectDoc = await db.collection('projects').doc(projectId).get();
  const project = projectDoc.data();
  if (!project || project.userId !== request.auth.uid) {
    throw new HttpsError('permission-denied', 'Project not found or access denied');
  }

  const jobRef = await db.collection('audit_jobs').add({
    projectId,
    status: 'pending',
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    zapScanId: null,
    zapSpiderId: null,
    zapContextId: null,
    errors: [],
    summaries: {
      seo:         { totalErrors: 0, pageCount: 0,                                             status: 'pending' },
      security:    { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [],         status: 'pending' },
      performance: { performance: 0, accessibility: 0, seo: 0, bestPractices: 0,               status: 'pending' },
    },
  });

  return { jobId: jobRef.id };
});

export const generateRemediation = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { projectId } = request.data;
  if (!projectId) {
    throw new HttpsError('invalid-argument', 'Project ID is required');
  }

  const bugsSnapshot = await db
    .collection('bug_list')
    .where('projectId', '==', projectId)
    .where('status', '==', 'Open')
    .get();

  const bugs = bugsSnapshot.docs.map((d) => d.data());

  const guide = await generateRemediationGuide(bugs as any[]);

  const batch = db.batch();
  bugsSnapshot.docs.forEach((doc) => {
    batch.update(doc.ref, { remediationGuide: guide });
  });
  await batch.commit();

  return { success: true, guide };
});
