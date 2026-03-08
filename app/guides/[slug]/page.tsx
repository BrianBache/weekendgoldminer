import Link from 'next/link';

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slugToTitle(slug);

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

        {/* Article Header */}
        <article className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-earth-200 dark:border-earth-700 overflow-hidden">
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-earth-300 to-gold-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gold-700 text-6xl mb-3">⛏️</div>
              <p className="text-earth-700 dark:text-earth-300 font-medium text-lg">{title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold text-earth-900 dark:text-dark-text mb-8">{title}</h1>

            {/* Article Body */}
            <div className="prose prose-sm max-w-none text-earth-800 dark:text-dark-text leading-relaxed space-y-6">
              <p>
                The pursuit of precious minerals demands both patience and systematic methodology. In
                the annals of prospecting, those who have succeeded invariably possessed a keen
                understanding of their environment and an unwavering commitment to proper technique.
                The subject at hand—{title.toLowerCase()}—represents a cornerstone of successful
                expedition planning. One must approach the endeavor with the seriousness it deserves,
                recognizing that hasty decisions often lead to fruitless searches or, worse, legal
                complications.
              </p>

              <p>
                Historical records demonstrate that the most productive prospectors were those who took
                time to study geological formations, weather patterns, and local regulations before
                venturing into the field. The careful observer will note that nature itself provides
                numerous indicators of promising locations. Streams carry sediment downstream from their
                source; the astute prospector learns to read these signs as surely as a woodsman reads
                the forest. Equipment maintenance, proper footwear, and adequate hydration are not mere
                suggestions—they are prerequisites for safe and effective work in remote locations.
              </p>

              <p>
                Whether you are conducting your first expedition or are a seasoned veteran returning to
                familiar territory, the principles remain constant: respect the land, follow all
                applicable laws, and approach the work with the diligence and professionalism that the
                activity demands. The information contained herein is offered as guidance for those
                willing to undertake this rewarding pursuit. Remember that conditions vary significantly
                by region and season, and what applies in one location may not apply in another.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-8 border-t border-earth-200 dark:border-earth-700">
              <div className="bg-earth-50 dark:bg-dark-bg border border-earth-300 dark:border-earth-700 rounded-md p-4">
                <p className="text-sm text-earth-700 dark:text-earth-300 font-semibold mb-2">Legal Notice</p>
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
