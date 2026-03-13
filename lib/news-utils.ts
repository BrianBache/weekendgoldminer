/**
 * Client-safe news utility functions.
 * This file has NO Node.js-only imports (no fs, no path)
 * so it can be imported by both server and client components.
 */

import type { NewsArticle } from './news';

/**
 * Returns true if the article's date is within the last `days` days.
 */
export function isRecent(article: NewsArticle, days: number = 30): boolean {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return new Date(article.date) >= cutoff;
}
