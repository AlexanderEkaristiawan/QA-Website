import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// ============================================================
// Types from ZAP OpenAPI spec v2.16.1
// ============================================================

export interface ZAPError {
  code: string;
  message: string;
  detail?: string;
}

// === Core Types ===
export interface ZAPAlert {
  id: string;
  name: string;
  risk: 'Informational' | 'Low' | 'Medium' | 'High';
  confidence: 'False Positive' | 'Low' | 'Medium' | 'High' | 'Confirmed';
  description: string;
  param: string;
  attack: string;
  otherInfo: string;
  solution: string;
  references: string;
  evidence: string;
  cweId: string;
  wascId: string;
  pluginId: string;
  sourceId: string;
  messageId: string;
  url: string;
  method: string;
  tags: Record<string, string>;
}

export interface ZAPAlertCounts {
  High: number;
  Medium: number;
  Low: number;
  Informational: number;
}

export interface ZAPMessage {
  id: string;
  requestHeader: string;
  requestBody: string;
  responseHeader: string;
  responseBody: string;
  timestamp: string;
  rtt: string;
  note: string;
  type: string;
  cookieParams: string[];
}

export interface ZAPContext {
  id: string;
  name: string;
  inScope: boolean;
  urls?: string[];
  includeRegexs?: string[];
  excludeRegexs?: string[];
}

export interface ZAPUser {
  id: string;
  name: string;
  enabled: boolean;
}

// === Scan Types ===
export interface SpiderOptions {
  url?: string;
  maxChildren?: number;
  recurse?: boolean;
  contextName?: string;
  subtreeOnly?: boolean;
}

export interface ActiveScanOptions {
  url?: string;
  recurse?: boolean;
  inScopeOnly?: boolean;
  scanPolicyName?: string;
  method?: string;
  postData?: string;
  contextId?: string;
}

export interface AjaxSpiderOptions {
  url?: string;
  inScope?: boolean;
  contextName?: string;
  subtreeOnly?: boolean;
  userName?: string;
}

// === Auth Types ===
export interface AuthSettings {
  authMethod: string;
  authConfig: Record<string, string>;
  loggedInIndicator?: string;
  loggedOutIndicator?: string;
  username: string;
  password: string;
}

export interface ReportOptions {
  title: string;
  template: string;
  theme?: string;
  description?: string;
  contexts?: string;
  sites?: string;
  sections?: string;
  includedConfidences?: string;
  includedRisks?: string;
  reportFileName?: string;
  reportDir?: string;
  display?: boolean;
}

// === Scan Result Types ===
export interface ScanResult {
  spiderScanId: string;
  activeScanId: string;
  alerts: ZAPAlert[];
}

// === Security Header Check ===
export interface SecurityHeaderInfo {
  header: string;
  present: boolean;
  value?: string;
  description: string;
  severity: 'High' | 'Medium' | 'Low';
}

export const KNOWN_SECURITY_HEADERS: SecurityHeaderInfo[] = [
  { header: 'content-security-policy', present: false, description: 'Controls resources the browser is allowed to load (prevents XSS)', severity: 'High' },
  { header: 'x-frame-options', present: false, description: 'Prevents clickjacking attacks', severity: 'Medium' },
  { header: 'x-content-type-options', present: false, description: 'Prevents MIME type sniffing', severity: 'Medium' },
  { header: 'strict-transport-security', present: false, description: 'Enforces HTTPS connections', severity: 'High' },
  { header: 'x-xss-protection', present: false, description: 'Enables browser XSS filter (legacy)', severity: 'Low' },
  { header: 'referrer-policy', present: false, description: 'Controls referrer information sent with requests', severity: 'Low' },
  { header: 'permissions-policy', present: false, description: 'Controls browser feature access', severity: 'Low' },
  { header: 'access-control-allow-origin', present: false, description: 'CORS policy for cross-origin requests', severity: 'Medium' },
  { header: 'cross-origin-opener-policy', present: false, description: 'Cross-origin window isolation (COOP)', severity: 'Medium' },
  { header: 'cross-origin-embedder-policy', present: false, description: 'Cross-origin resource loading policy (COEP)', severity: 'Medium' },
];

// ============================================================
// ZAP API Client
// ============================================================

export interface ZAPClientConfig {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
  maxRetries?: number;
}

export class ZAPClient {
  private client: AxiosInstance;
  private apiKey?: string;
  private maxRetries: number;

  constructor(config: ZAPClientConfig) {
    this.apiKey = config.apiKey;
    this.maxRetries = config.maxRetries || 3;

    this.client = axios.create({
      baseURL: config.baseUrl,
      timeout: config.timeout || 30000,
    });

    this.client.interceptors.request.use((reqConfig) => {
      reqConfig.params = {
        ...reqConfig.params,
        apikey: this.apiKey || '',
      };
      if (reqConfig.headers) {
        (reqConfig.headers as Record<string, string>)['X-ZAP-API-Key'] = this.apiKey || '';
      }
      return reqConfig;
    });
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    let lastError: Error | null = null;
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        const response = await this.client.request<T>(config);
        return response.data;
      } catch (error: any) {
        lastError = error;
        if (error.response?.status === 429) {
          await this.sleep(2000 * (attempt + 1));
          continue;
        }
        if (attempt < this.maxRetries - 1) {
          await this.sleep(1000 * (attempt + 1));
          continue;
        }
      }
    }
    throw lastError || new Error('Request failed after retries');
  }

  private async jsonGet<T>(path: string, params: Record<string, any> = {}): Promise<T> {
    return this.request<T>({ method: 'GET', url: `/JSON${path}`, params });
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async waitForCondition(
    checkFn: () => Promise<boolean>,
    intervalMs: number = 5000,
    timeoutMs: number = 600000
  ): Promise<void> {
    const startTime = Date.now();
    while (true) {
      const done = await checkFn();
      if (done) return;
      if (Date.now() - startTime > timeoutMs) {
        throw new Error('ZAP operation timed out');
      }
      await this.sleep(intervalMs);
    }
  }

  // ============================================================
  // Core
  // ============================================================

  async getVersion(): Promise<string> {
    const data = await this.jsonGet<{ version: string }>('/core/view/version/');
    return data.version;
  }

  async getMode(): Promise<string> {
    const data = await this.jsonGet<{ mode: string }>('/core/view/mode/');
    return data.mode;
  }

  async setMode(mode: 'safe' | 'protect' | 'standard' | 'attack'): Promise<void> {
    await this.jsonGet('/core/action/setMode/', { mode });
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.getVersion();
      return true;
    } catch {
      return false;
    }
  }

  async getSites(): Promise<string[]> {
    const data = await this.jsonGet<{ sites: string[] }>('/core/view/sites/');
    return data.sites || [];
  }

  async getUrls(baseurl?: string): Promise<string[]> {
    const data = await this.jsonGet<{ urls: string[] }>('/core/view/urls/', { baseurl });
    return data.urls || [];
  }

  async getMessage(id: string): Promise<ZAPMessage> {
    const data = await this.jsonGet<{ message: ZAPMessage }>('/core/view/message/', { id });
    return data.message;
  }

  // ============================================================
  // Context Management
  // ============================================================

  async createContext(name: string): Promise<string> {
    const data = await this.jsonGet<{ contextId: string }>('/context/action/newContext/', { contextName: name });
    return data.contextId;
  }

  async removeContext(name: string): Promise<void> {
    await this.jsonGet('/context/action/removeContext/', { contextName: name });
  }

  async listContexts(): Promise<string[]> {
    const data = await this.jsonGet<{ contextList: string[] }>('/context/view/contextList/');
    return data.contextList || [];
  }

  async getContext(name: string): Promise<ZAPContext> {
    const data = await this.jsonGet<{ context: ZAPContext }>('/context/view/context/', { contextName: name });
    return data.context;
  }

  async includeInContext(contextName: string, regex: string): Promise<void> {
    await this.jsonGet('/context/action/includeInContext/', { contextName, regex });
  }

  async excludeFromContext(contextName: string, regex: string): Promise<void> {
    await this.jsonGet('/context/action/excludeFromContext/', { contextName, regex });
  }

  async setContextInScope(contextName: string, inScope: boolean): Promise<void> {
    await this.jsonGet('/context/action/setContextInScope/', {
      contextName,
      booleanInScope: String(inScope),
    });
  }

  // ============================================================
  // Authentication and Users
  // ============================================================

  async setAuthenticationMethod(
    contextId: string,
    methodName: string,
    configParams: string = ''
  ): Promise<void> {
    await this.jsonGet('/authentication/action/setAuthenticationMethod/', {
      contextId,
      authMethodName: methodName,
      authMethodConfigParams: configParams,
    });
  }

  async setLoggedInIndicator(contextId: string, regex: string): Promise<void> {
    await this.jsonGet('/authentication/action/setLoggedInIndicator/', {
      contextId,
      loggedInIndicatorRegex: regex,
    });
  }

  async setLoggedOutIndicator(contextId: string, regex: string): Promise<void> {
    await this.jsonGet('/authentication/action/setLoggedOutIndicator/', {
      contextId,
      loggedOutIndicatorRegex: regex,
    });
  }

  async createUser(contextId: string, name: string): Promise<string> {
    const data = await this.jsonGet<{ userId: string }>('/users/action/newUser/', { contextId, name });
    return data.userId;
  }

  async removeUser(contextId: string, userId: string): Promise<void> {
    await this.jsonGet('/users/action/removeUser/', { contextId, userId });
  }

  async setUserCredentials(
    contextId: string,
    userId: string,
    credentials: Record<string, string>
  ): Promise<void> {
    const params = Object.entries(credentials)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');
    await this.jsonGet('/users/action/setAuthenticationCredentials/', {
      contextId,
      userId,
      authCredentialsConfigParams: params,
    });
  }

  async setUserEnabled(contextId: string, userId: string, enabled: boolean): Promise<void> {
    await this.jsonGet('/users/action/setUserEnabled/', {
      contextId,
      userId,
      enabled: String(enabled),
    });
  }

  async getUsersList(contextId?: string): Promise<ZAPUser[]> {
    const data = await this.jsonGet<{ usersList: ZAPUser[] }>('/users/view/usersList/', { contextId });
    return data.usersList || [];
  }

  // ============================================================
  // Spider (Traditional)
  // ============================================================

  async startSpider(options: SpiderOptions): Promise<string> {
    const params: Record<string, any> = {};
    if (options.url) params.url = options.url;
    if (options.maxChildren !== undefined) params.maxChildren = String(options.maxChildren);
    if (options.recurse !== undefined) params.recurse = String(options.recurse);
    if (options.contextName) params.contextName = options.contextName;
    if (options.subtreeOnly !== undefined) params.subtreeOnly = String(options.subtreeOnly);
    const data = await this.jsonGet<{ scan: string }>('/spider/action/scan/', params);
    return data.scan;
  }

  async getSpiderStatus(scanId: string): Promise<number> {
    const data = await this.jsonGet<{ status: string }>('/spider/view/status/', { scanId });
    return parseInt(data.status, 10);
  }

  async waitForSpiderComplete(scanId: string, timeoutMs: number = 300000): Promise<void> {
    let elapsed = 0;
    const intervalMs = 3000;
    while (elapsed < timeoutMs) {
      const result = await this.jsonGet<{ status: string }>('/spider/view/status/', { scanId });
      if (parseInt(result.status, 10) >= 100) return;
      await this.sleep(intervalMs);
      elapsed += intervalMs;
    }
    throw new Error('Spider scan timed out');
  }

  async stopSpider(scanId?: string): Promise<void> {
    await this.jsonGet('/spider/action/stop/', { scanId });
  }

  async pauseSpider(scanId: string): Promise<void> {
    await this.jsonGet('/spider/action/pause/', { scanId });
  }

  async resumeSpider(scanId: string): Promise<void> {
    await this.jsonGet('/spider/action/resume/', { scanId });
  }

  // ============================================================
  // Active Scan
  // ============================================================

  async startActiveScan(options: ActiveScanOptions): Promise<string> {
    const params: Record<string, any> = {};
    if (options.url) params.url = options.url;
    if (options.recurse !== undefined) params.recurse = String(options.recurse);
    if (options.inScopeOnly !== undefined) params.inScopeOnly = String(options.inScopeOnly);
    if (options.scanPolicyName) params.scanPolicyName = options.scanPolicyName;
    if (options.method) params.method = options.method;
    if (options.postData) params.postData = options.postData;
    if (options.contextId) params.contextId = options.contextId;
    const data = await this.jsonGet<{ scan: string }>('/ascan/action/scan/', params);
    return data.scan;
  }

  async getActiveScanStatus(scanId: string): Promise<number> {
    const data = await this.jsonGet<{ status: string }>('/ascan/view/status/', { scanId });
    return parseInt(data.status, 10);
  }

  async waitForActiveScanComplete(scanId: string, timeoutMs: number = 600000): Promise<void> {
    let elapsed = 0;
    const intervalMs = 5000;
    while (elapsed < timeoutMs) {
      const result = await this.jsonGet<{ status: string }>('/ascan/view/status/', { scanId });
      if (parseInt(result.status, 10) >= 100) return;
      await this.sleep(intervalMs);
      elapsed += intervalMs;
    }
    throw new Error('Active scan timed out');
  }

  async stopActiveScan(scanId: string): Promise<void> {
    await this.jsonGet('/ascan/action/stop/', { scanId });
  }

  async pauseActiveScan(scanId: string): Promise<void> {
    await this.jsonGet('/ascan/action/pause/', { scanId });
  }

  async resumeActiveScan(scanId: string): Promise<void> {
    await this.jsonGet('/ascan/action/resume/', { scanId });
  }

  // ============================================================
  // Alerts
  // ============================================================

  async getAlerts(
    baseurl?: string,
    start?: number,
    count?: number,
    riskId?: string,
    contextName?: string
  ): Promise<ZAPAlert[]> {
    const params: Record<string, any> = {};
    if (baseurl) params.baseurl = baseurl;
    if (start !== undefined) params.start = String(start);
    if (count !== undefined) params.count = String(count);
    if (riskId) params.riskId = riskId;
    if (contextName) params.contextName = contextName;
    const data = await this.jsonGet<{ alerts: ZAPAlert[] }>('/alert/view/alerts/', params);
    return data.alerts || [];
  }

  async getAlert(id: string): Promise<ZAPAlert> {
    const data = await this.jsonGet<{ alert: ZAPAlert }>('/alert/view/alert/', { id });
    return data.alert;
  }

  async deleteAllAlerts(): Promise<void> {
    await this.jsonGet('/alert/action/deleteAllAlerts/');
  }

  // ============================================================
  // Reports
  // ============================================================

  async generateReport(options: ReportOptions): Promise<string> {
    const data = await this.jsonGet<{ report: string }>('/reports/action/generate/', {
      title: options.title,
      template: options.template,
      theme: options.theme || '',
      description: options.description || '',
      contexts: options.contexts || '',
      sites: options.sites || '',
      sections: options.sections || '',
      includedConfidences: options.includedConfidences || '',
      includedRisks: options.includedRisks || '',
      reportFileName: options.reportFileName || '',
      reportDir: options.reportDir || '',
      display: options.display !== undefined ? String(options.display) : 'false',
    });
    return data.report;
  }

  async getReportTemplates(): Promise<any[]> {
    const data = await this.jsonGet<{ templates: any[] }>('/reports/view/templates/');
    return data.templates || [];
  }

  // ============================================================
  // Ajax Spider
  // ============================================================

  async startAjaxSpider(options: AjaxSpiderOptions): Promise<string> {
    const params: Record<string, any> = {};
    if (options.url) params.url = options.url;
    if (options.inScope !== undefined) params.inScope = String(options.inScope);
    if (options.contextName) params.contextName = options.contextName;
    if (options.subtreeOnly !== undefined) params.subtreeOnly = String(options.subtreeOnly);
    const data = await this.jsonGet<{ scan: string }>('/ajaxSpider/action/scan/', params);
    return data.scan;
  }

  async getAjaxSpiderStatus(): Promise<string> {
    const data = await this.jsonGet<{ status: string }>('/ajaxSpider/view/status/');
    return data.status;
  }

  async waitForAjaxSpiderComplete(timeoutMs: number = 600000): Promise<void> {
    let elapsed = 0;
    const intervalMs = 5000;
    while (elapsed < timeoutMs) {
      const status = await this.getAjaxSpiderStatus();
      if (status === 'stopped') return;
      await this.sleep(intervalMs);
      elapsed += intervalMs;
    }
    throw new Error('Ajax spider timed out');
  }

  async stopAjaxSpider(): Promise<void> {
    await this.jsonGet('/ajaxSpider/action/stop/');
  }

  // ============================================================
  // OpenAPI Import
  // ============================================================

  async importOpenApiFromUrl(url: string, hostOverride?: string, contextId?: string, userId?: string): Promise<void> {
    const params: Record<string, any> = { url };
    if (hostOverride) params.hostOverride = hostOverride;
    if (contextId) params.contextId = contextId;
    if (userId) params.userId = userId;
    await this.jsonGet('/openapi/action/importUrl/', params);
  }

  async importOpenApiFromFile(file: string, target?: string, contextId?: string, userId?: string): Promise<void> {
    const params: Record<string, any> = { file };
    if (target) params.target = target;
    if (contextId) params.contextId = contextId;
    if (userId) params.userId = userId;
    await this.jsonGet('/openapi/action/importFile/', params);
  }

  // ============================================================
  // Forced User Mode
  // ============================================================

  async setForcedUserModeEnabled(enabled: boolean): Promise<void> {
    await this.jsonGet('/forcedUser/action/setForcedUserModeEnabled/', { boolean: String(enabled) });
  }

  async setForcedUser(contextId: string, userId: string): Promise<void> {
    await this.jsonGet('/forcedUser/action/setForcedUser/', { contextId, userId });
  }

  // ============================================================
  // Passive Scan
  // ============================================================

  async setPassiveScanEnabled(enabled: boolean): Promise<void> {
    await this.jsonGet('/pscan/action/setEnabled/', { enabled: String(enabled) });
  }

  async getPassiveScanRecordsToScan(): Promise<number> {
    const data = await this.jsonGet<{ recordsToScan: string }>('/pscan/view/recordsToScan/');
    return parseInt(data.recordsToScan, 10) || 0;
  }

  // ============================================================
  // Network Configuration
  // ============================================================

  async setConnectionTimeout(timeout: number): Promise<void> {
    await this.jsonGet('/network/action/setConnectionTimeout/', { timeout: String(timeout) });
  }

  async setDefaultUserAgent(userAgent: string): Promise<void> {
    await this.jsonGet('/network/action/setDefaultUserAgent/', { userAgent });
  }

  // ============================================================
  // Authorization
  // ============================================================

  async setBasicAuthorizationDetection(
    contextId: string,
    headerRegex?: string,
    bodyRegex?: string,
    statusCode?: string,
    logicalOperator?: 'AND' | 'OR'
  ): Promise<void> {
    const params: Record<string, any> = { contextId };
    if (headerRegex) params.headerRegex = headerRegex;
    if (bodyRegex) params.bodyRegex = bodyRegex;
    if (statusCode) params.statusCode = statusCode;
    if (logicalOperator) params.logicalOperator = logicalOperator;
    await this.jsonGet('/authorization/action/setBasicAuthorizationDetectionMethod/', params);
  }

  // ============================================================
  // Access Control
  // ============================================================

  async startAccessControlScan(contextId: string, userId: string): Promise<string> {
    const data = await this.jsonGet<{ scan: string }>('/accessControl/action/scan/', { contextId, userId });
    return data.scan;
  }

  // ============================================================
  // Full Automated Scan (Spider + Active Scan combined)
  // ============================================================

  async runFullScan(options: {
    targetUrl: string;
    contextName?: string;
    authSettings?: AuthSettings;
    spiderOptions?: Partial<SpiderOptions>;
    activeScanOptions?: Partial<ActiveScanOptions>;
    timeoutMs?: number;
  }): Promise<ScanResult> {
    const maxTimeoutMs = options.timeoutMs || 900000;
    const halfTimeout = Math.floor(maxTimeoutMs / 2);
    let contextId: string | undefined;

    if (options.contextName) {
      const contexts = await this.listContexts();
      if (!contexts.includes(options.contextName)) {
        await this.createContext(options.contextName);
      }
      const contextData = await this.getContext(options.contextName);
      contextId = contextData.id;
    }

    if (options.authSettings && contextId) {
      const authConfigStr = Object.entries(options.authSettings.authConfig)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');

      await this.setAuthenticationMethod(contextId, options.authSettings.authMethod, authConfigStr);

      if (options.authSettings.loggedInIndicator) {
        await this.setLoggedInIndicator(contextId, options.authSettings.loggedInIndicator);
      }
      if (options.authSettings.loggedOutIndicator) {
        await this.setLoggedOutIndicator(contextId, options.authSettings.loggedOutIndicator);
      }

      const userId = await this.createUser(contextId, 'scan-user');
      await this.setUserCredentials(contextId, userId, {
        username: options.authSettings.username,
        password: options.authSettings.password,
      });
      await this.setUserEnabled(contextId, userId, true);
    }

    const spiderScanId = await this.startSpider({
      url: options.targetUrl,
      maxChildren: options.spiderOptions?.maxChildren ?? 10,
      recurse: options.spiderOptions?.recurse ?? true,
      contextName: options.contextName,
      subtreeOnly: options.spiderOptions?.subtreeOnly,
    });

    await this.waitForSpiderComplete(spiderScanId, halfTimeout);

    const activeScanId = await this.startActiveScan({
      url: options.targetUrl,
      recurse: options.activeScanOptions?.recurse ?? true,
      inScopeOnly: options.activeScanOptions?.inScopeOnly,
      scanPolicyName: options.activeScanOptions?.scanPolicyName,
      contextId,
    });

    await this.waitForActiveScanComplete(activeScanId, halfTimeout);

    const alerts = await this.getAlerts(options.targetUrl, 0, 500);

    return { spiderScanId, activeScanId, alerts };
  }
}
</｜｜DSML｜｜parameter>
