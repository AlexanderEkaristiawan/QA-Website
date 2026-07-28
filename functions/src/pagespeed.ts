import axios from 'axios';

const PAGESPEED_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

interface PageSpeedResult {
  performance: number;
  accessibility: number;
  seo: number;
  bestPractices: number;
}

export async function runPageSpeed(url: string): Promise<PageSpeedResult> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) {
    console.warn('PageSpeed API key not configured, returning default scores');
    return { performance: 0, accessibility: 0, seo: 0, bestPractices: 0 };
  }

  try {
    const response = await axios.get(PAGESPEED_API, {
      params: {
        url,
        key: apiKey,
        strategy: 'mobile',
        category: ['performance', 'accessibility', 'seo', 'best-practices'],
      },
      timeout: 30000,
    });

    const categories = response.data.lighthouseResult?.categories;
    if (!categories) {
      throw new Error('Invalid PageSpeed API response');
    }

    return {
      performance: Math.round((categories.performance?.score || 0) * 100),
      accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      seo: Math.round((categories.seo?.score || 0) * 100),
      bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
    };
  } catch (error: any) {
    console.error('PageSpeed API error:', error.message);
    return { performance: 0, accessibility: 0, seo: 0, bestPractices: 0 };
  }
}

