interface NewsCard {
  id: string;
  title: string;
  date: string;
}

interface NewsSection {
  title: string;
  cards: NewsCard[];
}

const newsSections: NewsSection[] = [
  {
    title: 'National',
    cards: [
      {
        id: 'national-1',
        title: 'New Federal Guidelines Released for Small-Scale Mining Operations',
        date: 'March 5, 2026',
      },
      {
        id: 'national-2',
        title: 'Prospecting Communities Unite to Advocate for Sustainable Practices',
        date: 'February 28, 2026',
      },
      {
        id: 'national-3',
        title: 'USGS Releases Updated Geological Survey Maps for Western States',
        date: 'February 20, 2026',
      },
    ],
  },
  {
    title: 'State',
    cards: [
      {
        id: 'state-1',
        title: 'State Permit Applications Now Available Online',
        date: 'March 4, 2026',
      },
      {
        id: 'state-2',
        title: 'New Seasonal Restrictions Announced for Waterway Access',
        date: 'February 25, 2026',
      },
      {
        id: 'state-3',
        title: 'State Parks Commission Approves Expanded Prospecting Zones',
        date: 'February 18, 2026',
      },
    ],
  },
  {
    title: 'Local',
    cards: [
      {
        id: 'local-1',
        title: 'County Fair Features Gold Panning Demonstration and Competition',
        date: 'March 6, 2026',
      },
      {
        id: 'local-2',
        title: 'Local Prospecting Club Hosts Monthly Meetup Next Saturday',
        date: 'March 3, 2026',
      },
      {
        id: 'local-3',
        title: 'Stream Restoration Project Completes Phase One',
        date: 'February 22, 2026',
      },
    ],
  },
  {
    title: 'Industry',
    cards: [
      {
        id: 'industry-1',
        title: 'New Lightweight Equipment Designed for Weekend Prospectors',
        date: 'March 2, 2026',
      },
      {
        id: 'industry-2',
        title: 'Industry Standards Updated for Safety and Sustainability',
        date: 'February 27, 2026',
      },
      {
        id: 'industry-3',
        title: 'Leading Equipment Manufacturers Announce Spring Product Lineup',
        date: 'February 16, 2026',
      },
    ],
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-50 to-earth-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-900 mb-4">
            News & Updates
          </h1>
          <p className="text-lg text-earth-700">
            Stay informed with the latest prospecting news and industry updates.
          </p>
        </div>

        {/* News Sections */}
        <div className="space-y-16">
          {newsSections.map((section) => (
            <section key={section.title}>
              {/* Section Header */}
              <div className="mb-8 pb-4 border-b-2 border-gold-400">
                <h2 className="text-2xl sm:text-3xl font-bold text-earth-900">
                  {section.title}
                </h2>
              </div>

              {/* News Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.cards.map((card) => (
                  <article
                    key={card.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-earth-200 overflow-hidden"
                  >
                    {/* Card Header with Date */}
                    <div className="px-6 py-4 bg-earth-50 border-b border-earth-200">
                      <p className="text-sm font-semibold text-gold-600">{card.date}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-earth-900 leading-snug mb-4 hover:text-gold-600 transition-colors">
                        {card.title}
                      </h3>

                      {/* Read More Link */}
                      <p className="text-gold-600 font-semibold text-sm hover:text-gold-700 cursor-pointer transition-colors">
                        Read More →
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 bg-white rounded-lg shadow-md border border-earth-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-earth-900 mb-4">
            Don't Miss Important Updates
          </h2>
          <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, guides, and prospecting tips
            delivered to your inbox.
          </p>
          <button className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </main>
  );
}
