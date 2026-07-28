import axios from 'axios';
import * as cheerio from 'cheerio';

interface AuthSettings {
  authType?: 'none' | 'basic' | 'session';
  basicAuthUsername?: string;
  basicAuthPassword?: string;
  sessionCookie?: string;
}

interface CrawlResult {
  totalErrors: number;
  pageCount: number;
}

export async function runSEOCrawler(
  baseUrl: string,
  authSettings: AuthSettings,
  maxPages: number = 25
): Promise<CrawlResult> {
  const visited = new Set<string>();
  const queue: string[] = [baseUrl];
  let totalErrors = 0;
  let pageCount = 0;

  const axiosConfig: Record<string, any> = {
    timeout: 10000,
    validateStatus: () => true,
    headers: {
      'User-Agent': 'QA-Suite-Crawler/1.0',
    },
  };

  if (authSettings.authType === 'basic' && authSettings.basicAuthUsername) {
    axiosConfig.auth = {
      username: authSettings.basicAuthUsername,
      password: authSettings.basicAuthPassword || '',
    };
  }

  if (authSettings.authType === 'session' && authSettings.sessionCookie) {
    axiosConfig.headers = {
      ...axiosConfig.headers,
      Cookie: authSettings.sessionCookie,
    };
  }

  while (queue.length > 0 && pageCount < maxPages) {
    const url = queue.shift()!;
    if (visited.has(url)) continue;
    visited.add(url);

    try {
      const response = await axios.get(url, axiosConfig);
      const html = response.data;
      const $ = cheerio.load(html);
      pageCount++;

      const title = $('title').text().trim();
      const metaDescription = $('meta[name="description"]').attr('content');
      const h1Count = $('h1').length;
      const imgWithoutAlt = $('img:not([alt])').length;
      const hasViewport = $('meta[name="viewport"]').length > 0;

      if (!title) totalErrors++;
      if (!metaDescription) totalErrors++;
      if (h1Count === 0) totalErrors++;
      if (h1Count > 1) totalErrors++;
      if (imgWithoutAlt > 0) totalErrors++;
      if (!hasViewport) totalErrors++;

      const headers = response.headers;
      const securityHeaders = [
        'content-security-policy',
        'x-frame-options',
        'x-content-type-options',
        'strict-transport-security',
        'x-xss-protection',
        'referrer-policy',
        'permissions-policy',
      ];

      for (const header of securityHeaders) {
        if (!headers[header]) totalErrors++;
      }

      // Extract internal links for BFS crawl
      if (pageCount < maxPages) {
        $('a[href]').each((_, el) => {
          let href = $(el).attr('href') || '';
          try {
            const absoluteUrl = new URL(href, baseUrl).href;
            if (
              absoluteUrl.startsWith(baseUrl) &&
              !visited.has(absoluteUrl) &&
              !queue.includes(absoluteUrl)
            ) {
              queue.push(absoluteUrl);
            }
          } catch {
            // Invalid URL, skip
          }
        });
      }
    } catch (error: any) {
      console.error(`Error crawling ${url}:`, error.message);
      totalErrors++;
    }
  }

  return { totalErrors, pageCount };
}

