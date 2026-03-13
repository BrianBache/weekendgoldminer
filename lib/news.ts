import fs from 'fs';
import path from 'path';

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  date: string;
  category: 'national' | 'state' | 'local';
  state?: string; // lowercase state name e.g. "washington", null/undefined for national
  tags?: string[];
}

export interface NewsData {
  lastUpdated: string;
  articles: NewsArticle[];
}

const NEWS_FILE = path.join(process.cwd(), 'content', 'news', 'articles.json');

export function getNews(): NewsData {
  try {
    if (!fs.existsSync(NEWS_FILE)) {
      return { lastUpdated: '', articles: [] };
    }
    const raw = fs.readFileSync(NEWS_FILE, 'utf8');
    return JSON.parse(raw) as NewsData;
  } catch {
    return { lastUpdated: '', articles: [] };
  }
}

/**
 * Filter articles by category.
 * - For 'national': returns all national articles (state param ignored).
 * - For 'state' or 'local': if state is provided, filters to that state;
 *   otherwise returns all articles in that category.
 */
export function getArticlesByCategory(
  articles: NewsArticle[],
  category: string,
  state?: string
): NewsArticle[] {
  const byCategory = articles.filter((a) => a.category === category);

  if ((category === 'state' || category === 'local') && state && state !== '') {
    return byCategory.filter((a) => a.state === state.toLowerCase());
  }

  return byCategory;
}
