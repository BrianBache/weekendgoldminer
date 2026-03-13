import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function AssayersCorner() {
  const articles = [
    {
      id: 1,
      title: 'Understanding Gold Purity',
      excerpt: 'Learn the difference between 10K, 14K, 18K, and 24K gold and how purity affects value.',
      date: 'March 5, 2026',
    },
    {
      id: 2,
      title: 'Common Gold Prospecting Mistakes',
      excerpt: 'Avoid these costly errors when searching for gold in streams and creeks.',
      date: 'February 28, 2026',
    },
    {
      id: 3,
      title: 'Where to Find Gold Near You',
      excerpt: 'Regional guide to promising gold prospecting locations across North America.',
      date: 'February 21, 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader title="Assayer's Corner" subtitle="Your hub for gold prospecting knowledge, valuation tools, and buyer resources." />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/assayers-corner/gold-value-tool">
            <div className="bg-white dark:bg-dark-surface border-2 border-gold-300 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-gold-600 text-3xl mb-3">🔍</div>
              <h2 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-2">Gold Value Tool</h2>
              <p className="text-earth-600 dark:text-earth-300">
                Estimate your gold's value based on purity, weight, and buyer type.
              </p>
            </div>
          </Link>

          <Link href="/assayers-corner/sell-your-gold">
            <div className="bg-white dark:bg-dark-surface border-2 border-gold-300 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-gold-600 text-3xl mb-3">📋</div>
              <h2 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-2">Sell Your Gold Directory</h2>
              <p className="text-earth-600 dark:text-earth-300">
                Find trusted buyers in your area with our verified directory.
              </p>
            </div>
          </Link>

          <Link href="/assayers-corner/diy-smelting">
            <div className="bg-white dark:bg-dark-surface border-2 border-gold-300 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-gold-600 text-3xl mb-3">🔥</div>
              <h2 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-2">DIY Smelting</h2>
              <p className="text-earth-600 dark:text-earth-300">
                Educational resources for safe gold smelting practices.
              </p>
            </div>
          </Link>
        </div>

        {/* Articles Section */}
        <div>
          <h2 className="text-3xl font-bold text-earth-800 dark:text-dark-text mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-dark-surface rounded-lg shadow p-8 border-l-4 border-gold-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-earth-800 dark:text-dark-text">{article.title}</h3>
                  <span className="text-sm text-earth-500 dark:text-earth-400">{article.date}</span>
                </div>
                <p className="text-earth-600 dark:text-earth-300 text-lg">{article.excerpt}</p>
                <button className="mt-4 text-gold-600 font-semibold hover:text-gold-700">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
