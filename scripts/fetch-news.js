#!/usr/bin/env node
/**
 * fetch-news.js
 * Fetches RSS feeds and merges new articles into /content/news/articles.json.
 * No external dependencies — only Node.js built-ins.
 */

'use strict';

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────────────

const ARTICLES_FILE = path.join(__dirname, '..', 'content', 'news', 'articles.json');
const MAX_ARTICLES = 200;

const RSS_FEEDS = [
  // ── National feeds ───────────────────────────────────────────────────────────
  {
    url: 'https://news.google.com/rss/search?q=BLM+mining+claim+recreational+prospecting+permit&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'national',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+permit+regulation+2025+OR+2026&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'national',
  },
  {
    url: 'https://news.google.com/rss/search?q=suction+dredge+mining+regulation+ban&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'national',
  },
  {
    url: 'https://news.google.com/rss/search?q=recreational+mining+public+land+BLM+access&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'national',
  },
  // ── All 50 states ────────────────────────────────────────────────────────────
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Alabama+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Alaska+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Arizona+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Arkansas+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+California+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Colorado+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Connecticut+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Delaware+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Florida+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Georgia+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Hawaii+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Idaho+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Illinois+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Indiana+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Iowa+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Kansas+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Kentucky+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Louisiana+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Maine+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Maryland+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Massachusetts+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Michigan+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Minnesota+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Mississippi+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Missouri+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Montana+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Nebraska+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Nevada+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+New+Hampshire+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+New+Jersey+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+New+Mexico+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+New+York+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+North+Carolina+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+North+Dakota+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Ohio+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Oklahoma+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Oregon+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Pennsylvania+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Rhode+Island+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+South+Carolina+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+South+Dakota+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Tennessee+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Texas+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Utah+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Vermont+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Virginia+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Washington+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+West+Virginia+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Wisconsin+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
  {
    url: 'https://news.google.com/rss/search?q=gold+prospecting+mining+Wyoming+permit+regulation&hl=en-US&gl=US&ceid=US:en',
    source: 'Google News',
    defaultCategory: 'state',
  },
];

// Domains known to produce SEO spam / content-farm articles — skip any article from these
const BLOCKED_DOMAINS = ['farmonaut.com', 'goldrushnuggets.com', 'panning-for-gold.net'];

const STATE_NAMES = [
  'alabama',
  'alaska',
  'arizona',
  'arkansas',
  'california',
  'colorado',
  'connecticut',
  'delaware',
  'florida',
  'georgia',
  'hawaii',
  'idaho',
  'illinois',
  'indiana',
  'iowa',
  'kansas',
  'kentucky',
  'louisiana',
  'maine',
  'maryland',
  'massachusetts',
  'michigan',
  'minnesota',
  'mississippi',
  'missouri',
  'montana',
  'nebraska',
  'nevada',
  'new hampshire',
  'new jersey',
  'new mexico',
  'new york',
  'north carolina',
  'north dakota',
  'ohio',
  'oklahoma',
  'oregon',
  'pennsylvania',
  'rhode island',
  'south carolina',
  'south dakota',
  'tennessee',
  'texas',
  'utah',
  'vermont',
  'virginia',
  'washington',
  'west virginia',
  'wisconsin',
  'wyoming',
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Fetch a URL, following redirects up to 5 times.
 * Returns the response body as a string.
 */
function fetchUrl(url, redirectsLeft = 5) {
  return new Promise((resolve, reject) => {
    if (redirectsLeft === 0) {
      return reject(new Error(`Too many redirects for ${url}`));
    }

    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          'User-Agent': 'WeekendGoldMiner-NewsBot/1.0',
          Accept: 'application/rss+xml, application/xml, text/xml, */*',
        },
        timeout: 15000,
      },
      (res) => {
        // Follow 3xx redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(fetchUrl(res.headers.location, redirectsLeft - 1));
          res.resume();
          return;
        }

        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        res.on('error', reject);
      }
    );

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

/**
 * Extract the text content of an XML tag (first match only).
 */
function extractTag(xml, tag) {
  // CDATA
  const cdataRe = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[(.*?)\\]\\]></${tag}>`, 'si');
  const cdataMatch = xml.match(cdataRe);
  if (cdataMatch) return cdataMatch[1].trim();

  // Plain text
  const plainRe = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, 'si');
  const plainMatch = xml.match(plainRe);
  if (plainMatch) return decodeXmlEntities(plainMatch[1].trim());

  return '';
}

function decodeXmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

/**
 * Strip HTML tags from a string.
 */
function stripHtml(str) {
  return str.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * Parse <item> blocks out of RSS XML.
 */
function parseRssItems(xml) {
  const items = [];
  const itemRe = /<item[^>]*>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRe.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

/**
 * Build a URL-safe slug from a string.
 */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-')
    .slice(0, 60);
}

/**
 * Generate a unique article ID from title + date.
 */
function makeId(title, date) {
  const datePart = date ? new Date(date).toISOString().slice(0, 10).replace(/-/g, '') : 'nodate';
  return `${datePart}-${slugify(title)}`;
}

/**
 * Detect if an article belongs to a specific state.
 * Returns the lowercase state name, or null.
 */
function detectState(title, description) {
  const combined = `${title} ${description}`.toLowerCase();

  for (const state of STATE_NAMES) {
    // Word-boundary check
    const re = new RegExp(`\\b${state.replace(/\s+/g, '\\s+')}\\b`, 'i');
    if (re.test(combined)) {
      return state;
    }
  }
  return null;
}

/**
 * Process a single RSS feed and return an array of NewsArticle objects.
 */
async function processFeed(feed) {
  console.log(`  Fetching: ${feed.url}`);
  let xml;
  try {
    xml = await fetchUrl(feed.url);
  } catch (err) {
    console.warn(`  ⚠ Skipped ${feed.source}: ${err.message}`);
    return [];
  }

  const items = parseRssItems(xml);
  console.log(`  Parsed ${items.length} items from ${feed.source}`);

  return items
    .map((item) => {
      const title = stripHtml(extractTag(item, 'title'));
      const link =
        extractTag(item, 'link') ||
        (() => {
          const m = item.match(/<link>(.*?)<\/link>/i);
          return m ? m[1].trim() : '';
        })();
      const pubDate = extractTag(item, 'pubDate') || extractTag(item, 'dc:date');
      const description = stripHtml(extractTag(item, 'description'));
      const summary = description.slice(0, 300) + (description.length > 300 ? '…' : '');

      if (!title || !link) return null;

      // Skip articles from blocked content-farm domains.
      // Google News wraps links in redirect URLs, so also check title text
      // (blocked sites typically appear as "- SiteName" in Google News titles).
      const blockedDomainNames = BLOCKED_DOMAINS.map((d) => d.split('.')[0].toLowerCase());
      const titleLower = title.toLowerCase();
      const linkLower = link.toLowerCase();
      if (
        blockedDomainNames.some((name) => titleLower.includes(name)) ||
        BLOCKED_DOMAINS.some((domain) => linkLower.includes(domain))
      )
        return null;

      const detectedState = detectState(title, description);
      const category = detectedState ? 'state' : feed.defaultCategory;
      const date = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();

      return {
        id: makeId(title, date),
        title,
        summary,
        url: link,
        source: feed.source,
        date,
        category,
        ...(detectedState ? { state: detectedState } : {}),
        tags: [],
      };
    })
    .filter(Boolean);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🔍 WeekendGoldMiner — fetch-news.js');
  console.log('─'.repeat(50));

  // Load existing articles
  let existing = { lastUpdated: '', articles: [] };
  if (fs.existsSync(ARTICLES_FILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf8'));
    } catch (e) {
      console.warn('Could not parse existing articles.json, starting fresh:', e.message);
    }
  }

  const existingUrls = new Set(existing.articles.map((a) => a.url));
  const newArticles = [];

  for (const feed of RSS_FEEDS) {
    const fetched = await processFeed(feed);
    for (const article of fetched) {
      if (!existingUrls.has(article.url)) {
        newArticles.push(article);
        existingUrls.add(article.url);
      }
    }
  }

  console.log(`\n✅ New articles found: ${newArticles.length}`);

  if (newArticles.length === 0 && existing.articles.length > 0) {
    console.log('No changes — articles.json is up to date.');
    return;
  }

  // Merge: new articles first, then existing (newest → oldest)
  const merged = [...newArticles, ...existing.articles];

  // Sort by date descending
  merged.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Trim to max
  const trimmed = merged.slice(0, MAX_ARTICLES);
  const trimmedCount = merged.length - trimmed.length;
  if (trimmedCount > 0) {
    console.log(`Trimmed ${trimmedCount} oldest articles (max ${MAX_ARTICLES}).`);
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    articles: trimmed,
  };

  fs.writeFileSync(ARTICLES_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n💾 Saved ${trimmed.length} articles to ${ARTICLES_FILE}`);
  console.log(`🕒 lastUpdated: ${output.lastUpdated}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
