'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import type { NewsArticle, NewsData } from '@/lib/news';
// isRecent is available via @/lib/news-utils if needed for future filtering

const STATES = [
  'Alaska',
  'California',
  'Colorado',
  'Idaho',
  'Montana',
  'Oregon',
  'Washington',
];

const CATEGORY_LABELS: Record<string, string> = {
  national: 'National',
  state: 'State',
  local: 'Local',
};

const CATEGORY_BADGE_STYLES: Record<string, string> = {
  national: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  state: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  local: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
};

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="bg-white dark:bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow border border-earth-200 dark:border-earth-700 overflow-hidden flex flex-col">
      {/* Card header */}
      <div className="px-6 py-3 bg-earth-50 dark:bg-dark-bg border-b border-earth-200 dark:border-earth-700 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-gold-600">{formatDate(article.date)}</p>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            CATEGORY_BADGE_STYLES[article.category] ?? ''
          }`}
        >
          {CATEGORY_LABELS[article.category] ?? article.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-earth-500 dark:text-earth-400 mb-2 font-medium">
          {article.source}
        </p>
        <h3 className="text-base font-bold text-earth-900 dark:text-dark-text leading-snug mb-3 hover:text-gold-600 transition-colors">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        {article.summary && (
          <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed flex-1">
            {article.summary}
          </p>
        )}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}

function EmptySection({ category, state }: { category: string; state: string }) {
  const label = CATEGORY_LABELS[category] ?? category;
  const stateLabel = state ? ` ${state}` : '';
  return (
    <p className="text-earth-500 dark:text-earth-400 italic text-sm py-4">
      No{stateLabel} {label.toLowerCase()} stories in the archive yet.
    </p>
  );
}

function NewsSection({
  title,
  articles,
  category,
  selectedState,
}: {
  title: string;
  articles: NewsArticle[];
  category: string;
  selectedState: string;
}) {
  const filtered =
    (category === 'state' || category === 'local') && selectedState
      ? articles.filter(
          (a) => a.category === category && a.state === selectedState.toLowerCase()
        )
      : articles.filter((a) => a.category === category);

  return (
    <section>
      <div className="mb-8 pb-4 border-b-2 border-gold-400">
        <h2 className="text-2xl sm:text-3xl font-bold text-earth-900 dark:text-dark-text">
          {title}
        </h2>
      </div>

      {filtered.length === 0 ? (
        <EmptySection category={category} state={selectedState} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function NewsArchivePage() {
  const [selectedState, setSelectedState] = useState('');
  const [newsData, setNewsData] = useState<NewsData>({ lastUpdated: '', articles: [] });

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data: NewsData) => {
        // Sort all articles by date descending — no cutoff
        const sorted = [...data.articles].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNewsData({ ...data, articles: sorted });
      })
      .catch(() => {
        // silently fall back to empty state
      });
  }, []);

  const { articles, lastUpdated } = newsData;

  return (
    <main className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader
        title="News Archive"
        subtitle="Historical coverage of gold prospecting news"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Back to News */}
        <div className="mb-8">
          <a
            href="/news"
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-[#1C2526] transition-colors"
            style={{ backgroundColor: '#1C2526' }}
          >
            ← Back to News
          </a>
        </div>

        {/* Top bar — filter + last updated */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          {/* State filter */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="state-filter"
              className="text-sm font-semibold text-earth-700 dark:text-earth-300 whitespace-nowrap"
            >
              Filter state &amp; local news:
            </label>
            <select
              id="state-filter"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="rounded-md border border-earth-300 dark:border-earth-600 px-3 py-1.5 text-sm font-medium text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              style={{ backgroundColor: '#1C2526' }}
            >
              <option value="">All States</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Last updated */}
          {lastUpdated && (
            <p className="text-xs text-earth-500 dark:text-earth-400 whitespace-nowrap">
              Last updated: {formatDate(lastUpdated)}
            </p>
          )}
        </div>

        {/* Archive note */}
        <div className="mb-10 p-4 rounded-lg border border-gold-400 bg-gold-50 dark:bg-dark-surface">
          <p className="text-sm text-earth-700 dark:text-earth-300">
            📁 <strong>You&apos;re browsing the full archive.</strong> All articles are preserved here —
            the main <a href="/news" className="text-gold-600 underline hover:text-gold-700">News page</a> shows
            only the last 30 days.
          </p>
        </div>

        {/* News sections */}
        <div className="space-y-16">
          <NewsSection
            title="National"
            articles={articles}
            category="national"
            selectedState={selectedState}
          />
          <NewsSection
            title="State"
            articles={articles}
            category="state"
            selectedState={selectedState}
          />
          <NewsSection
            title="Local"
            articles={articles}
            category="local"
            selectedState={selectedState}
          />
        </div>

        {/* Back link at bottom */}
        <div className="mt-16 text-center">
          <a
            href="/news"
            className="inline-block rounded-lg px-8 py-4 text-base font-semibold text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-[#1C2526] transition-colors"
            style={{ backgroundColor: '#1C2526' }}
          >
            ← Back to News
          </a>
        </div>
      </div>
    </main>
  );
}
