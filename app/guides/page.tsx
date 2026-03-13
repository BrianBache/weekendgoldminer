import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getAllGuides } from '@/lib/guides';

const categoryColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default async function ProspectingGuidesPage() {
  const guides = await getAllGuides();

  return (
    <main className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader
        title="Prospecting Guides"
        subtitle="Master the art and science of gold prospecting with our comprehensive guides."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const badgeClass =
              categoryColors[guide.frontmatter.category] ||
              'bg-earth-100 text-earth-800 dark:bg-earth-700 dark:text-earth-200';

            return (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer border border-earth-200 dark:border-earth-700 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-earth-200 to-gold-200 dark:from-earth-700 flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-gold-600 text-4xl mb-2">⛏️</div>
                      <p className="text-earth-600 dark:text-earth-300 text-sm font-medium">
                        Prospecting Guide
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}
                      >
                        {guide.frontmatter.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-earth-900 dark:text-dark-text mb-2 hover:text-gold-600 transition-colors">
                      {guide.frontmatter.title}
                    </h2>
                    <p className="text-earth-700 dark:text-earth-300 text-sm leading-relaxed">
                      {guide.frontmatter.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-earth-50 dark:bg-dark-bg border-t border-earth-200 dark:border-earth-700 flex-shrink-0">
                    <p className="text-gold-600 font-semibold text-sm hover:text-gold-700">
                      Read Guide →
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
