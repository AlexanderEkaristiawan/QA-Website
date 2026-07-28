import axios from 'axios';

interface BugItem {
  title: string;
  description: string;
  source: string;
  severity: string;
}

export async function generateRemediationGuide(bugs: BugItem[]): Promise<string> {
  const apiKey = process.env.AI_API_KEY;
  const provider = process.env.AI_PROVIDER || 'openai';

  if (!apiKey) {
    return getDefaultRemediationGuide(bugs);
  }

  const bugsText = bugs
    .map((b) => `- [${b.severity}] [${b.source}] ${b.title}: ${b.description}`)
    .join('\n');

  const prompt = `Review these failing audit metrics and bugs. Generate a comprehensive Remediation Guide with:

1) **Executive Summary** - Overview of risks and impact
2) **Root Cause Analysis** - For each issue, explain the technical root cause
3) **Step-by-Step Fixes** - Detailed code/server configuration fixes for each issue

## Issues Found:
${bugsText || 'No specific issues identified. Provide general best practices for SEO, Security, and Performance.'}

Format each issue with clear, actionable steps. Include code snippets where relevant.`;

  try {
    if (provider === 'openai') {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a senior DevOps and QA engineer providing structured remediation guides.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 2000,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.choices[0].message.content;
    } else {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                { text: `You are a senior DevOps and QA engineer providing structured remediation guides.\n\n${prompt}` },
              ],
            },
          ],
        }
      );
      return response.data.candidates[0].content.parts[0].text;
    }
  } catch (error: any) {
    console.error('AI remediation generation failed:', error.message);
    return getDefaultRemediationGuide(bugs);
  }
}

function getDefaultRemediationGuide(bugs: BugItem[]): string {
  if (bugs.length === 0) {
    return `## Remediation Guide

### Executive Summary
No critical issues were detected during the audit. Continue monitoring with regular scans.

### Best Practices
1. **Regular Audits**: Schedule weekly automated audits to catch regressions early
2. **Performance Budget**: Set performance budgets for Core Web Vitals
3. **Security Headers**: Implement all recommended security headers
4. **SEO Monitoring**: Continuously monitor SEO metrics
5. **CI/CD Integration**: Integrate QA checks into your deployment pipeline`;
  }

  let guide = `## Remediation Guide\n\n### Executive Summary\n${bugs.length} issue(s) were detected during the audit. Below are the root causes and step-by-step fixes.\n\n`;
  guide += `### Issues and Fixes\n\n`;

  bugs.forEach((bug, index) => {
    guide += `**${index + 1}. ${bug.title}**\n`;
    guide += `- **Source**: ${bug.source}\n`;
    guide += `- **Severity**: ${bug.severity}\n`;
    guide += `- **Description**: ${bug.description}\n`;
    guide += `- **Recommended Action**: Review and fix based on the description above.\n\n`;
  });

  guide += `### General Recommendations\n`;
  guide += `1. Implement Web Application Firewall (WAF) rules\n`;
  guide += `2. Enable Content Security Policy (CSP) headers\n`;
  guide += `3. Optimize images and implement lazy loading\n`;
  guide += `4. Add structured data for better SEO\n`;
  guide += `5. Implement proper error handling and logging\n`;

  return guide;
}

