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

function ArticleIllustration({ category }: { category: string }) {
  if (category === "Gear") {
    // Mountain stream scene
    return (
      <svg viewBox="0 0 400 192" className="w-full h-48" aria-label="Mountain stream illustration">
        <rect width="400" height="192" fill="#162810" />
        {/* Mountains */}
        <polygon points="0,140 80,50 160,140" fill="#2D5A27" />
        <polygon points="100,140 200,30 300,140" fill="#1f4a1f" />
        <polygon points="220,140 320,60 400,140" fill="#2D5A27" />
        {/* Snow caps */}
        <polygon points="200,30 185,55 215,55" fill="#d4eed4" opacity="0.6" />
        <polygon points="80,50 68,68 92,68" fill="#d4eed4" opacity="0.5" />
        {/* Stream */}
        <path d="M0,165 Q100,150 200,165 Q300,180 400,160" fill="none" stroke="#4caf4c" strokeWidth="2" opacity="0.6" />
        <path d="M0,172 Q100,158 200,172 Q300,185 400,168" fill="none" stroke="#4caf4c" strokeWidth="1.5" opacity="0.4" />
        {/* Gold flecks in stream */}
        <circle cx="120" cy="164" r="2" fill="#D4A017" opacity="0.8" />
        <circle cx="250" cy="170" r="1.5" fill="#D4A017" opacity="0.7" />
        <circle cx="180" cy="168" r="1.8" fill="#D4A017" opacity="0.6" />
        <circle cx="310" cy="166" r="1.5" fill="#D4A017" opacity="0.8" />
        {/* Trees */}
        <polygon points="50,140 55,110 60,140" fill="#1f4a1f" />
        <polygon points="340,140 346,105 352,140" fill="#1f4a1f" />
        <polygon points="360,140 365,115 370,140" fill="#2D5A27" />
      </svg>
    );
  }

  if (category === "Regulations") {
    // Shovel and landscape
    return (
      <svg viewBox="0 0 400 192" className="w-full h-48" aria-label="Shovel and landscape illustration">
        <rect width="400" height="192" fill="#162810" />
        {/* Rolling hills */}
        <ellipse cx="100" cy="192" rx="200" ry="80" fill="#2D5A27" />
        <ellipse cx="350" cy="192" rx="150" ry="60" fill="#1f4a1f" />
        {/* Shovel */}
        <line x1="200" y1="40" x2="200" y2="150" stroke="#a07d4a" strokeWidth="4" strokeLinecap="round" />
        <path d="M185,150 Q200,180 215,150 Q200,140 185,150Z" fill="#7a5a32" />
        {/* Handle grip */}
        <line x1="192" y1="40" x2="208" y2="40" stroke="#5c4021" strokeWidth="4" strokeLinecap="round" />
        {/* Small sign/post */}
        <rect x="280" y="100" width="3" height="50" fill="#5c4021" />
        <rect x="270" y="95" width="30" height="18" rx="2" fill="#2D5A27" stroke="#4caf4c" strokeWidth="1" />
        {/* Gold nuggets on ground */}
        <circle cx="160" cy="155" r="3" fill="#D4A017" opacity="0.8" />
        <circle cx="230" cy="148" r="2.5" fill="#D4A017" opacity="0.7" />
        <circle cx="175" cy="160" r="2" fill="#D4A017" opacity="0.6" />
        {/* Grass tufts */}
        <path d="M120,145 L123,130 L126,145" fill="none" stroke="#4caf4c" strokeWidth="1.5" opacity="0.5" />
        <path d="M250,140 L253,125 L256,140" fill="none" stroke="#4caf4c" strokeWidth="1.5" opacity="0.5" />
        <path d="M320,145 L323,132 L326,145" fill="none" stroke="#4caf4c" strokeWidth="1.5" opacity="0.4" />
      </svg>
    );
  }

  // Technique — water/ripple motif
  return (
    <svg viewBox="0 0 400 192" className="w-full h-48" aria-label="River ripples illustration">
      <rect width="400" height="192" fill="#162810" />
      {/* Water ripples */}
      <path d="M0,60 Q50,45 100,60 Q150,75 200,60 Q250,45 300,60 Q350,75 400,60" fill="none" stroke="#4caf4c" strokeWidth="2" opacity="0.3" />
      <path d="M0,80 Q50,65 100,80 Q150,95 200,80 Q250,65 300,80 Q350,95 400,80" fill="none" stroke="#4caf4c" strokeWidth="2" opacity="0.4" />
      <path d="M0,100 Q50,85 100,100 Q150,115 200,100 Q250,85 300,100 Q350,115 400,100" fill="none" stroke="#4caf4c" strokeWidth="2.5" opacity="0.5" />
      <path d="M0,120 Q50,105 100,120 Q150,135 200,120 Q250,105 300,120 Q350,135 400,120" fill="none" stroke="#4caf4c" strokeWidth="2" opacity="0.4" />
      <path d="M0,140 Q50,125 100,140 Q150,155 200,140 Q250,125 300,140 Q350,155 400,140" fill="none" stroke="#4caf4c" strokeWidth="1.5" opacity="0.3" />
      {/* Boulder in river */}
      <ellipse cx="200" cy="95" rx="30" ry="18" fill="#2D5A27" />
      <ellipse cx="200" cy="92" rx="28" ry="14" fill="#1f4a1f" />
      {/* Gold settling behind boulder */}
      <circle cx="210" cy="108" r="2.5" fill="#D4A017" opacity="0.9" />
      <circle cx="220" cy="112" r="2" fill="#D4A017" opacity="0.7" />
      <circle cx="205" cy="113" r="1.8" fill="#D4A017" opacity="0.8" />
      <circle cx="215" cy="116" r="1.5" fill="#D4A017" opacity="0.6" />
      {/* Bedrock crack line */}
      <path d="M80,150 L100,148 L115,155 L140,145 L160,152" fill="none" stroke="#5c4021" strokeWidth="1.5" opacity="0.4" />
      {/* Inside bend deposit */}
      <circle cx="320" cy="108" r="2" fill="#D4A017" opacity="0.7" />
      <circle cx="330" cy="115" r="2.5" fill="#D4A017" opacity="0.8" />
      <circle cx="325" cy="120" r="1.5" fill="#D4A017" opacity="0.6" />
    </svg>
  );
}

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
              <ArticleIllustration category={article.category} />
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
