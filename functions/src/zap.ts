import axios from 'axios';
import {
  ZAPClient,
  ZAPAlert,
  KNOWN_SECURITY_HEADERS,
  SecurityHeaderInfo,
  AuthSettings,
} from './zap-client';

// ============================================================
// Types
// ============================================================

export interface ZAPScanResult {
  highAlerts: number;
  mediumAlerts: number;
  lowAlerts: number;
  missingHeaders: string[];
  alerts?: ZAPAlert[];
  raw?: {
    spiderScanId: string;
    activeScanId: string;
    alertCount: number;
  };
}

export interface ZAPRunOptions {
  targetUrl: string;
  authSettings?: {
    authType?: 'none' | 'basic' | 'session';
    basicAuthUsername?: string;
    basicAuthPassword?: string;
    sessionCookie?: string;
  };
  contextName?: string;
  scanPolicyName?: string;
  timeoutMs?: number;
}

// ============================================================
// ZAP Scan Orchestrator
// ============================================================

function getZapClient(): ZAPClient {
  const zapApiKey = process.env.ZAP_API_KEY;
  const zapBaseUrl = process.env.ZAP_BASE_URL || 'http://localhost:8080';

  return new ZAPClient({
    baseUrl: zapBaseUrl,
    apiKey: zapApiKey,
    timeout: 30000,
    maxRetries: 2,
  });
}

/**
 * Convert app-level auth settings to ZAP AuthSettings
 */
function buildAuthSettings(options: ZAPRunOptions): { contextName: string; authSettings?: AuthSettings } | undefined {
  if (!options.authSettings || options.authSettings.authType === 'none') {
    return undefined;
  }

  const contextName = options.contextName || `scan-${Date.now()}`;
  let authSettings: AuthSettings;

  if (options.authSettings.authType === 'basic') {
    authSettings = {
      authMethod: 'httpBasedAuthentication',
      authConfig: {
        hostname: new URL(options.targetUrl).hostname,
        realm: new URL(options.targetUrl).hostname,
        port: String(new URL(options.targetUrl).port || (options.targetUrl.startsWith('https') ? '443' : '80')),
      },
      username: options.authSettings.basicAuthUsername || '',
      password: options.authSettings.basicAuthPassword || '',
    };
  } else if (options.authSettings.authType === 'session') {
    authSettings = {
      authMethod: 'formBasedAuthentication',
      authConfig: {
        loginUrl: options.targetUrl,
        loginRequestData: options.authSettings.sessionCookie || '',
      },
      username: '',
      password: '',
    };
  } else {
    return undefined;
  }

  return { contextName, authSettings };
}

/**
 * Run a comprehensive ZAP scan against a target URL.
 * Uses the typed ZAPClient for all API interactions.
 * Falls back to passive security header check if ZAP is not available.
 */
export async function runZAPScan(targetUrl: string): Promise<ZAPScanResult>;
export async function runZAPScan(options: ZAPRunOptions): Promise<ZAPScanResult>;
export async function runZAPScan(optionsOrUrl: string | ZAPRunOptions): Promise<ZAPScanResult> {
  const options: ZAPRunOptions = typeof optionsOrUrl === 'string'
    ? { targetUrl: optionsOrUrl }
    : optionsOrUrl;

  const zapApiKey = process.env.ZAP_API_KEY;
  const zapBaseUrl = process.env.ZAP_BASE_URL || 'http://localhost:8080';

  if (!zapApiKey) {
    console.warn('ZAP_API_KEY not configured. Running passive security checks only.');
    return runPassiveSecurityCheck(options.targetUrl);
  }

  try {
    return await runActiveZapScan(options);
  } catch (error: any) {
    console.error('ZAP scan failed, falling back to passive check:', error.message);
    return runPassiveSecurityCheck(options.targetUrl);
  }
}

/**
 * Run an active ZAP scan using the typed client.
 */
async function runActiveZapScan(options: ZAPRunOptions): Promise<ZAPScanResult> {
  const client = getZapClient();

  // Ensure ZAP is reachable
  const isHealthy = await client.healthCheck();
  if (!isHealthy) {
    throw new Error('ZAP instance is not reachable');
  }

  // Set mode to standard
  await client.setMode('standard');

  // Configure auth if provided
  const authResult = buildAuthSettings(options);
  const contextName = authResult?.contextName || options.contextName;

  // Run the full scan (spider + active scan)
  const scanResult = await client.runFullScan({
    targetUrl: options.targetUrl,
    contextName,
    authSettings: authResult?.authSettings,
    spiderOptions: {
      maxChildren: 10,
      recurse: true,
    },
    activeScanOptions: {
      recurse: true,
      scanPolicyName: options.scanPolicyName,
    },
    timeoutMs: options.timeoutMs,
  });

  // Process alerts
  let highAlerts = 0;
  let mediumAlerts = 0;
  let lowAlerts = 0;

  for (const alert of scanResult.alerts) {
    if (alert.risk === 'High') highAlerts++;
    else if (alert.risk === 'Medium') mediumAlerts++;
    else if (alert.risk === 'Low') lowAlerts++;
  }

  // Run passive security header check as well
  const missingHeaders = await checkSecurityHeaders(options.targetUrl);

  // Generate a ZAP report
  try {
    await client.generateReport({
      title: `Security Scan - ${options.targetUrl}`,
      template: 'modern',
      sites: options.targetUrl,
      reportFileName: `zap-report-${Date.now()}.html`,
      reportDir: '/tmp/zap-reports',
    });
  } catch (reportError: any) {
    console.warn('Failed to generate ZAP report:', reportError.message);
  }

  return {
    highAlerts,
    mediumAlerts,
    lowAlerts,
    missingHeaders,
    alerts: scanResult.alerts,
    raw: {
      spiderScanId: scanResult.spiderScanId,
      activeScanId: scanResult.activeScanId,
      alertCount: scanResult.alerts.length,
    },
  };
}

/**
 * Check for missing security headers via passive HTTP request.
 */
async function checkSecurityHeaders(targetUrl: string): Promise<string[]> {
  const missing: string[] = [];

  try {
    const response = await axios.get(targetUrl, {
      timeout: 10000,
      validateStatus: () => true,
      maxRedirects: 5,
    });

    const headers = response.headers;

    for (const info of KNOWN_SECURITY_HEADERS) {
      if (!headers[info.header]) {
        missing.push(info.header);
      }
    }
  } catch (error: any) {
    console.error('Security header check failed:', error.message);
    // Return all headers as missing if we can't reach the target
    return KNOWN_SECURITY_HEADERS.map((h) => h.header);
  }

  return missing;
}

/**
 * Passive security check fallback - checks HTTP response headers only.
 */
async function runPassiveSecurityCheck(targetUrl: string): Promise<ZAPScanResult> {
  const missingHeaders = await checkSecurityHeaders(targetUrl);

  const highCount = missingHeaders.filter(
    (h) => KNOWN_SECURITY_HEADERS.find((info) => info.header === h)?.severity === 'High'
  ).length;

  const mediumCount = missingHeaders.filter(
    (h) => KNOWN_SECURITY_HEADERS.find((info) => info.header === h)?.severity === 'Medium'
  ).length;

  const lowCount = missingHeaders.filter(
    (h) => KNOWN_SECURITY_HEADERS.find((info) => info.header === h)?.severity === 'Low'
  ).length;

  return {
    highAlerts: highCount,
    mediumAlerts: mediumCount,
    lowAlerts: lowCount,
    missingHeaders,
  };
}

/**
 * Run AJAX Spider (for SPAs / JavaScript-heavy apps).
 * Available as a complementary scan to the traditional spider.
 */
export async function runAjaxSpiderScan(
  targetUrl: string,
  options?: { contextName?: string; timeoutMs?: number }
): Promise<ScanResultSummary> {
  const client = getZapClient();

  await client.startAjaxSpider({
    url: targetUrl,
    inScope: true,
    contextName: options?.contextName,
  });

  await client.waitForAjaxSpiderComplete(options?.timeoutMs || 600000);

  const alerts = await client.getAlerts(targetUrl, 0, 500);

  let highAlerts = 0;
  let mediumAlerts = 0;
  let lowAlerts = 0;

  for (const alert of alerts) {
    if (alert.risk === 'High') highAlerts++;
    else if (alert.risk === 'Medium') mediumAlerts++;
    else if (alert.risk === 'Low') lowAlerts++;
  }

  return { highAlerts, mediumAlerts, lowAlerts, totalAlerts: alerts.length };
}

export interface ScanResultSummary {
  highAlerts: number;
  mediumAlerts: number;
  lowAlerts: number;
  totalAlerts: number;
}

/**
 * Import an OpenAPI spec and scan the API endpoints.
 */
export async function scanOpenApi(
  specUrl: string,
  targetUrl?: string,
  options?: { contextName?: string; timeoutMs?: number }
): Promise<ZAPScanResult> {
  const zapApiKey = process.env.ZAP_API_KEY;
  if (!zapApiKey) {
    throw new Error('ZAP_API_KEY required for OpenAPI scanning');
  }

  const client = getZapClient();

  await client.importOpenApiFromUrl(specUrl, targetUrl);

  // Give ZAP time to process the spec
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return runZAPScan({
    targetUrl: targetUrl || specUrl,
    contextName: options?.contextName,
    timeoutMs: options?.timeoutMs,
  });
}
</parameter>
