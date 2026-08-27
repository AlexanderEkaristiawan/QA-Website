"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailNotificationEnabled = isEmailNotificationEnabled;
exports.sendEmailNotification = sendEmailNotification;
const nodemailer_1 = __importDefault(require("nodemailer"));
let transporter = null;
function getSmtpConfig() {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT || '465');
    const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    return { host, port, secure, user, pass, from };
}
function isEmailNotificationEnabled() {
    const cfg = getSmtpConfig();
    return Boolean(cfg.user && cfg.pass && cfg.from);
}
function getTransporter() {
    if (transporter)
        return transporter;
    const cfg = getSmtpConfig();
    if (!cfg.user || !cfg.pass) {
        throw new Error('SMTP credentials are missing. Set SMTP_USER and SMTP_PASS.');
    }
    transporter = nodemailer_1.default.createTransport({
        host: cfg.host,
        port: cfg.port,
        secure: cfg.secure,
        auth: {
            user: cfg.user,
            pass: cfg.pass,
        },
    });
    return transporter;
}
async function sendEmailNotification(payload) {
    const cfg = getSmtpConfig();
    if (!cfg.from)
        throw new Error('SMTP_FROM is not configured and SMTP_USER is unavailable.');
    const tx = getTransporter();
    await tx.sendMail({
        from: cfg.from,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
    });
}
