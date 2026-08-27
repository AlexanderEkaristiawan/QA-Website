"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const firestore_1 = require("./_shared/firestore");
const mailer_1 = require("./_shared/mailer");
const axios_1 = __importDefault(require("axios"));
async function validateAuth(targetUrl, authSettings) {
    const headers = {
        "User-Agent": "QASuite-Preflight/1.0",
    };
    if (authSettings.authType === "basic" && authSettings.basicAuthUsername) {
        const token = Buffer.from(`${authSettings.basicAuthUsername}:${authSettings.basicAuthPassword || ""}`).toString("base64");
        headers["Authorization"] = `Basic ${token}`;
    }
    if (authSettings.authType === "session" && authSettings.sessionCookie) {
        headers["Cookie"] = authSettings.sessionCookie;
    }
    try {
        const response = await axios_1.default.get(targetUrl, {
            headers,
            timeout: 8000,
            maxRedirects: 3,
            validateStatus: () => true,
        });
        if (response.status === 401 || response.status === 403) {
            return {
                ok: false,
                statusCode: response.status,
                message: `Authentication failed — server returned ${response.status}. Check your credentials.`,
            };
        }
        if (response.status >= 400) {
            return {
                ok: false,
                statusCode: response.status,
                message: `Target URL returned HTTP ${response.status}. Check the URL is correct.`,
            };
        }
        return {
            ok: true,
            statusCode: response.status,
            message: "Auth validated successfully",
        };
    }
    catch (err) {
        return {
            ok: false,
            statusCode: 0,
            message: `Could not reach target URL: ${err.message}`,
        };
    }
}
const handler = async (event) => {
    const origin = event.headers.origin;
    if (event.httpMethod === "OPTIONS")
        return (0, firestore_1.jsonResponse)(204, {}, origin);
    if (event.httpMethod !== "POST")
        return (0, firestore_1.jsonResponse)(405, { error: "Method not allowed" }, origin);
    const db = (0, firestore_1.getDb)();
    const fv = (0, firestore_1.getFieldValue)();
    const body = JSON.parse(event.body || "{}");
    const { jobId, projectId, targetUrl, authSettings = { authType: "none" }, } = body;
    if (!jobId || !projectId || !targetUrl) {
        return (0, firestore_1.jsonResponse)(400, { error: "jobId, projectId, and targetUrl required" }, origin);
    }
    const jobRef = db.collection("audit_jobs").doc(jobId);
    const result = await validateAuth(targetUrl, authSettings);
    if (!result.ok) {
        await jobRef.update({
            status: "auth-failed",
            errors: fv.arrayUnion({
                bot: "preflight",
                message: result.message,
                retriesLeft: 0,
            }),
        });
        // Create a notification for the project owner
        const projectSnap = await db
            .collection("projects")
            .doc(projectId)
            .get()
            .catch(() => null);
        if (projectSnap?.exists) {
            const ownerId = projectSnap.data()?.ownerId;
            const projectName = projectSnap.data()?.name || projectId;
            if (ownerId) {
                await db.collection("notifications").add({
                    userId: ownerId,
                    title: "Audit Auth Failed",
                    message: result.message,
                    read: false,
                    link: `/projects/${projectId}`,
                    createdAt: fv.serverTimestamp(),
                });
                if ((0, mailer_1.isEmailNotificationEnabled)()) {
                    try {
                        const owner = await (0, firestore_1.getAuth)().getUser(ownerId);
                        if (owner.email) {
                            const subject = `[QA-Suite] Audit authentication failed: ${projectName}`;
                            const text = [
                                "QA-Suite detected an authentication failure before crawling started.",
                                "",
                                `Project: ${projectName}`,
                                `Project ID: ${projectId}`,
                                `Reason: ${result.message}`,
                                "",
                                "Open the project and update authentication settings, then retry the audit.",
                            ].join("\n");
                            await (0, mailer_1.sendEmailNotification)({
                                to: owner.email,
                                subject,
                                text,
                            });
                        }
                    }
                    catch (emailErr) {
                        console.warn("[preflight-check] Failed to send auth-failed email:", emailErr?.message || emailErr);
                    }
                }
            }
        }
        return (0, firestore_1.jsonResponse)(200, { ok: false, statusCode: result.statusCode, message: result.message }, origin);
    }
    return (0, firestore_1.jsonResponse)(200, { ok: true, statusCode: result.statusCode, message: result.message }, origin);
};
exports.handler = handler;
