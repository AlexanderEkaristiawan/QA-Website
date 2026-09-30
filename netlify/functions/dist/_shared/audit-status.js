"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshAuditJobStatus = refreshAuditJobStatus;
const TERMINAL_STATUSES = new Set(['completed', 'failed', 'unavailable', 'auth-failed']);
async function refreshAuditJobStatus(db, jobId) {
    const jobRef = db.collection('audit_jobs').doc(jobId);
    const snapshot = await jobRef.get();
    if (!snapshot.exists)
        return;
    const summaries = snapshot.data()?.summaries ?? {};
    const statuses = [summaries.seo?.status, summaries.security?.status, summaries.performance?.status];
    if (!statuses.every(status => TERMINAL_STATUSES.has(status)))
        return;
    const hasFailure = statuses.some(status => status === 'failed' || status === 'auth-failed');
    await jobRef.update({ status: hasFailure ? 'partial-failed' : 'completed' });
}
