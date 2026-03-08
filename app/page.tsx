import Link from "next/link";
import Image from "next/image";

const featuredArticles = [
  {
    category: "Gear",
    title: "The $150 Starter Kit That Actually Works",
    teaser: "You don't need a sluice box on day one. Here's the gear that matters when you're just getting started.",
    href: "/guides",
  },
  {
    category: "Regulations",
    title: "California Suction Dredging: What's Legal in 2026",
    teaser: "The rules changed again. Here's what recreational prospectors need to know before hitting the water.",
    href: "/guides",
  },
  {
    category: "Technique",
    title: "Reading the River: Where Gold Settles and Why",
    teaser: "Inside bends, bedrock cracks, and behind boulders — learn to read water like an old-timer.",
    href: "/guides",
  },
];

const startHereCards = [
  {
    title: "Find Locations",
    description: "Search gold-bearing rivers, creeks, and public land sites across every state. Filter by access type, equipment allowed, and recent reports.",
    href: "/find-locations",
    icon: "📍",
  },
  {
    title: "Equipment Reviews",
    description: "Honest reviews of pans, classifiers, sluice boxes, and detectors — tested in the field by weekend prospectors, not salespeople.",
    href: "/equipment",
    icon: "⛏️",
  },
  {
    title: "Beginner Guides",
    description: "Step-by-step guides from your first pan to reading a river. No jargon, no gatekeeping — just what works.",
    href: "/guides",
    icon: "📖",
  },
];

const latestNews = [
  {
    title: "BLM Finalizes 2026 Recreational Prospecting Guidelines",
    date: "Mar 5, 2026",
  },
  {
    title: "Gold Holds Above $2,900/oz — What It Means for Small-Scale Miners",
    date: "Mar 3, 2026",
  },
  {
    title: "Spring Runoff Forecast: Best Windows for Creek Prospecting This Year",
    date: "Feb 28, 2026",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-hero text-earth-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-36 h-36 mx-auto mb-8 flex items-center justify-center">
            <Image src="/logo.png" alt="WeekendGoldMiner" width={144} height={144} priority />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gold-400 leading-tight">
            Your Creek Is Waiting
          </h1>
          <p className="text-lg md:text-xl text-earth-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            The free field guide for weekend gold prospectors. Find locations, learn techniques, and get honest gear reviews — from people who actually stand in rivers on Saturdays.
          </p>
          <Link
            href="/find-locations"
            className="inline-block px-8 py-4 bg-gold-600 text-white font-bold text-lg rounded-lg hover:bg-gold-500 transition-colors shadow-lg hover:shadow-xl"
          >
            Find Locations Near You
          </Link>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="bg-earth-100 dark:bg-dark-surface py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-earth-800 dark:text-dark-text mb-3">
            Start Here
          </h2>
          <p className="text-earth-600 dark:text-earth-300 mb-10 max-w-2xl">
            New to gold prospecting? Pick a path and dive in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startHereCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white dark:bg-dark-bg border border-earth-200 dark:border-earth-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:border-gold-600 dark:hover:border-gold-600"
              >
                <span className="text-4xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-3 group-hover:text-gold-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-earth-600 dark:text-earth-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-earth-800 dark:text-dark-text mb-3">
          Featured Articles
        </h2>
        <p className="text-earth-600 dark:text-earth-300 mb-10 max-w-2xl">
          Deep dives from the field — gear, technique, and the rules of the creek.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group bg-white dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-forest-800 dark:bg-forest-900 flex items-center justify-center">
                <span className="text-forest-400 text-sm tracking-wider uppercase">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-600 mb-2">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-earth-800 dark:text-dark-text mb-2 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-earth-600 dark:text-earth-300 text-sm leading-relaxed">
                  {article.teaser}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/guides" className="text-gold-600 font-bold hover:text-gold-500 transition-colors">
            Browse all guides →
          </Link>
        </div>
      </section>

      {/* Latest News Strip */}
      <section className="border-t border-b border-earth-200 dark:border-earth-700 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-earth-500 dark:text-earth-400">
              Latest News
            </h2>
            <div className="flex-1 h-px bg-earth-200 dark:bg-earth-700" />
            <Link href="/news" className="text-sm text-gold-600 font-medium hover:text-gold-500 transition-colors">
              All news →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Link
                key={item.title}
                href="/news"
                className="group flex items-start gap-3"
              >
                <span className="text-gold-600 mt-1 text-xs">●</span>
                <div>
                  <p className="text-sm font-medium text-earth-800 dark:text-dark-text group-hover:text-gold-600 transition-colors leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-earth-400 mt-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
