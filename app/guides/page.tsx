import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const guides = [
  {
    slug: 'intro-to-gold-prospecting',
    title: 'Intro to Gold Prospecting',
    description: 'Learn the fundamentals of gold prospecting and get started with your first expedition.',
  },
  {
    slug: 'where-gold-forms',
    title: 'Where Gold Actually Forms',
    description: 'Understand the geological conditions and locations where gold deposits typically occur.',
  },
  {
    slug: 'reading-a-stream',
    title: 'Reading a Stream',
    description: 'Develop the skill to identify promising areas in streams and creeks for gold deposits.',
  },
  {
    slug: 'digging-ethics',
    title: 'Digging Ethics & Courtesy',
    description: 'Respect the land, other prospectors, and local communities while pursuing your hobby.',
  },
  {
    slug: 'avoid-getting-fined',
    title: 'How to Avoid Getting Fined',
    description: 'Navigate regulations and permitting requirements to stay on the right side of the law.',
  },
  {
    slug: 'winter-vs-summer',
    title: 'Winter vs Summer Prospecting',
    description: 'Adapt your techniques and strategy based on seasonal conditions and weather patterns.',
  },
  {
    slug: 'high-water-warnings',
    title: 'High Water Warnings & Flash Floods',
    description: 'Recognize hazards and stay safe during high water events in your prospecting area.',
  },
];

export default function ProspectingGuidesPage() {
  return (
    <main className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader title="Prospecting Guides" subtitle="Master the art and science of gold prospecting with our comprehensive guides." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer border border-earth-200 dark:border-earth-700">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-earth-200 to-gold-200 dark:from-earth-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gold-600 text-4xl mb-2">⛏️</div>
                    <p className="text-earth-600 dark:text-earth-300 text-sm font-medium">Prospecting Guide</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-earth-900 dark:text-dark-text mb-2 hover:text-gold-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-earth-700 dark:text-earth-300 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-earth-50 dark:bg-dark-bg border-t border-earth-200 dark:border-earth-700">
                  <p className="text-gold-600 font-semibold text-sm hover:text-gold-700">
                    Read Guide →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
