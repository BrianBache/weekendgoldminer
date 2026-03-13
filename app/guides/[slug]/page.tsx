import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getGuideBySlug, getAllGuideSlugs } from '@/lib/guides';

// Category badge colors
const categoryColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  // Graceful "content coming soon" state for unknown slugs
  if (!guide) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-earth-50 to-earth-100 dark:from-dark-bg dark:to-dark-surface py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/guides"
              className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              ← Back to Guides
            </Link>
          </div>
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-earth-200 dark:border-earth-700 p-10 text-center">
            <div className="text-6xl mb-4">⛏️</div>
            <h1 className="text-2xl font-bold text-earth-900 dark:text-dark-text mb-3">
              Content Coming Soon
            </h1>
            <p className="text-earth-600 dark:text-earth-300">
              This guide is being written. Check back soon!
            </p>
          </div>
        </div>
      </main>
    );
  }

  const { frontmatter, content } = guide;
  const badgeClass =
    categoryColors[frontmatter.category] ||
    'bg-earth-100 text-earth-800 dark:bg-earth-700 dark:text-earth-200';

  // Format date for display
  const displayDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-50 to-earth-100 dark:from-dark-bg dark:to-dark-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/guides"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors"
          >
            ← Back to Guides
          </Link>
        </div>

        {/* Article */}
        <article className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-earth-200 dark:border-earth-700 overflow-hidden">
          {/* Hero Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-earth-300 to-gold-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gold-700 text-6xl mb-3">⛏️</div>
              <p className="text-earth-700 dark:text-earth-300 font-medium text-lg">
                {frontmatter.title}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
                {frontmatter.category}
              </span>
              <span className="text-sm text-earth-500 dark:text-earth-400">{displayDate}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-earth-900 dark:text-dark-text mb-4">
              {frontmatter.title}
            </h1>

            {/* Description */}
            {frontmatter.description && (
              <p className="text-lg text-earth-600 dark:text-earth-300 mb-8 leading-relaxed">
                {frontmatter.description}
              </p>
            )}

            {/* MDX Body */}
            <div className="prose prose-earth dark:prose-invert max-w-none prose-headings:text-earth-900 dark:prose-headings:text-dark-text prose-a:text-gold-600 hover:prose-a:text-gold-700 prose-strong:text-earth-900 dark:prose-strong:text-dark-text">
              <MDXRemote source={content} />
            </div>

            {/* Affiliate Disclaimer */}
            {frontmatter.affiliateDisclaimer && (
              <div className="mt-10 pt-8 border-t border-earth-200 dark:border-earth-700">
                <div className="bg-earth-50 dark:bg-dark-bg border border-earth-300 dark:border-earth-700 rounded-md p-4">
                  <p className="text-sm text-earth-700 dark:text-earth-300 font-semibold mb-2">
                    Affiliate Disclosure
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-300">
                    This guide contains affiliate links. We may earn a small commission at no extra
                    cost to you if you purchase through these links.
                  </p>
                </div>
              </div>
            )}

            {/* Legal Notice */}
            <div className="mt-10 pt-8 border-t border-earth-200 dark:border-earth-700">
              <div className="bg-earth-50 dark:bg-dark-bg border border-earth-300 dark:border-earth-700 rounded-md p-4">
                <p className="text-sm text-earth-700 dark:text-earth-300 font-semibold mb-2">
                  Legal Notice
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300">
                  Check with local authorities for confirmation of all regulations, permits, and
                  access restrictions before beginning any prospecting activity.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation Footer */}
        <div className="mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors"
          >
            ← Back to Guides
          </Link>
        </div>
      </div>
    </main>
  );
}
