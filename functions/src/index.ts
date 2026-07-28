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

    const [performanceResult, seoResult, securityResult] = await Promise.allSettled([
      runPageSpeed(project.targetUrl),
      runSEOCrawler(project.targetUrl, project.authSettings || {}),
      runZAPScan({
        targetUrl: project.targetUrl,
        authSettings: project.authSettings || {},
        contextName: project.name?.replace(/[^a-zA-Z0-9_-]/g, '_'),
      }),
    ]);

    const performanceSummary = performanceResult.status === 'fulfilled'
      ? performanceResult.value
      : { performance: 0, accessibility: 0, seo: 0, bestPractices: 0 };

    const seoData = seoResult.status === 'fulfilled'
      ? seoResult.value
      : { totalErrors: 0, pageCount: 0 };

    const securityData = securityResult.status === 'fulfilled'
      ? securityResult.value
      : { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [] };

    await jobRef?.update({
      status: 'completed',
      performanceSummary,
      seoSummary: seoData,
      securitySummary: securityData,
    });

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

    if (securityData.highAlerts > 0) {
      bugs.push({
        projectId,
        title: `${securityData.highAlerts} High Risk Security Vulnerabilities`,
        source: 'SECURITY',
        severity: 'Critical',
        description: `${securityData.highAlerts} high-risk vulnerabilities were detected. Review and patch immediately.`,
        status: 'Open',
      });
    }

    if (seoData.totalErrors > 0) {
      bugs.push({
        projectId,
        title: `${seoData.totalErrors} SEO Issues Detected`,
        source: 'SEO',
        severity: seoData.totalErrors > 5 ? 'Major' : 'Minor',
        description: `${seoData.totalErrors} SEO issues were found across ${seoData.pageCount} pages.`,
        status: 'Open',
      });
    }

    const batch = db.batch();
    for (const bug of bugs) {
      const bugRef = db.collection('bug_list').doc();
      batch.set(bugRef, {
        ...bug,
        remediationGuide: null,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    await batch.commit();

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
    seoSummary: { totalErrors: 0, pageCount: 0 },
    securitySummary: { highAlerts: 0, mediumAlerts: 0, lowAlerts: 0, missingHeaders: [] },
    performanceSummary: { performance: 0, accessibility: 0, seo: 0, bestPractices: 0 },
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
</parameter>
