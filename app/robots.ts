import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — allow all well-behaved crawlers
      {
        userAgent: '*',
        allow: '/',
      },

      // --- Traditional search engines ---
      { userAgent: 'Googlebot',   allow: '/' },
      { userAgent: 'Bingbot',     allow: '/' },
      { userAgent: 'Slurp',       allow: '/' }, // Yahoo (powered by Bing)
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },

      // --- OpenAI / ChatGPT ---
      { userAgent: 'GPTBot',       allow: '/' }, // ChatGPT training + search answers
      { userAgent: 'ChatGPT-User', allow: '/' }, // ChatGPT real-time browsing

      // --- Anthropic / Claude ---
      { userAgent: 'ClaudeBot',    allow: '/' }, // Claude AI search and training
      { userAgent: 'Claude-Web',   allow: '/' }, // Legacy Claude crawler
      { userAgent: 'anthropic-ai', allow: '/' }, // General Anthropic crawler

      // --- Google AI (Gemini + AI Overviews) ---
      { userAgent: 'Google-Extended', allow: '/' }, // Gemini model training + AI Overviews

      // --- Perplexity AI ---
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity search answers

      // --- Apple Intelligence / Siri ---
      { userAgent: 'Applebot',          allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence features

      // --- Amazon / Alexa ---
      { userAgent: 'Amazonbot', allow: '/' },

      // --- Meta AI ---
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },

      // --- Other AI search platforms ---
      { userAgent: 'YouBot',      allow: '/' }, // You.com AI search
      { userAgent: 'Bytespider',  allow: '/' }, // ByteDance / TikTok AI
      { userAgent: 'cohere-ai',   allow: '/' }, // Cohere AI
      { userAgent: 'CCBot',       allow: '/' }, // Common Crawl (feeds many LLMs)
    ],
    sitemap: 'https://magnumopuscloud.com/sitemap.xml',
    host: 'https://magnumopuscloud.com',
  }
}
