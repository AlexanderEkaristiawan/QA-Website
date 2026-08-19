"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHeaders = exports.jsonResponse = void 0;
exports.getDb = getDb;
exports.getFieldValue = getFieldValue;
exports.getTimestamp = getTimestamp;
const admin = __importStar(require("firebase-admin"));
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const response_1 = require("./response");
Object.defineProperty(exports, "jsonResponse", { enumerable: true, get: function () { return response_1.jsonResponse; } });
Object.defineProperty(exports, "corsHeaders", { enumerable: true, get: function () { return response_1.corsHeaders; } });
// Netlify injects production variables; this also supports the repository's local netlify/.env file.
(0, dotenv_1.config)({ path: (0, path_1.resolve)(process.cwd(), 'netlify/.env') });
// Initialize Firebase Admin once (lazy singleton)
function initAdmin() {
    if (admin.apps.length > 0)
        return admin.apps[0];
    let serviceAccount;
    // Option 1: Discrete env vars (significantly smaller payload size)
    if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
        serviceAccount = {
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        };
    }
    // Option 2: Single JSON or Base64 string
    else if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.trim();
        if (!serviceAccountJson.startsWith('{')) {
            try {
                serviceAccountJson = Buffer.from(serviceAccountJson, 'base64').toString('utf8');
            }
            catch (err) {
                throw new Error(`Failed to decode Base64 FIREBASE_SERVICE_ACCOUNT_KEY: ${err.message}`);
            }
        }
        const parsed = JSON.parse(serviceAccountJson);
        serviceAccount = {
            projectId: parsed.project_id || process.env.FIREBASE_PROJECT_ID,
            clientEmail: parsed.client_email,
            privateKey: parsed.private_key ? parsed.private_key.replace(/\\n/g, '\n') : undefined,
        };
    }
    if (!serviceAccount || !serviceAccount.privateKey || !serviceAccount.clientEmail) {
        throw new Error('Firebase credentials not properly configured (FIREBASE_PRIVATE_KEY + FIREBASE_CLIENT_EMAIL or FIREBASE_SERVICE_ACCOUNT_KEY required)');
    }
    return admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.projectId,
    });
}
function getDb() {
    initAdmin();
    return admin.firestore();
}
function getFieldValue() {
    return admin.firestore.FieldValue;
}
function getTimestamp() {
    return admin.firestore.Timestamp;
}
