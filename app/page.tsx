import Link from "next/link";
import Image from "next/image";
import PlaceholderCard from "@/components/PlaceholderCard";

const quickTools = [
  { title: "Equipment Recommender", description: "Tell us your budget and experience level — we'll match you with the right gear." },
  { title: "Kit-Up Planner", description: "Build your prospecting kit from scratch. We'll make sure you don't forget the essentials." },
  { title: "Where Can I Go?", description: "Enter your location and find legal prospecting sites near you." },
  { title: "Gold Value Estimator", description: "Estimate what your finds are worth based on weight, purity, and current spot price." },
];

const featuredArticles = [
  { title: "Intro to Gold Prospecting", description: "Everything a beginner needs to know before heading to the creek." },
  { title: "Reading a Stream", description: "Where gold settles, how water moves it, and where to dig." },
  { title: "Digging Ethics & Courtesy", description: "Leave it better than you found it. The unwritten rules of the creek." },
];

const latestNews = [
  { title: "BLM Updates Public Land Access Rules", description: "New guidelines for recreational prospecting on federal lands." },
  { title: "Gold Prices Hold Steady Above $2,000", description: "What steady prices mean for weekend prospectors and small-scale miners." },
  { title: "Spring Prospecting Season Preview", description: "Water levels, weather patterns, and what to expect this year." },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-earth-800 dark:bg-dark-bg text-earth-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
            <Image src="/logo.png" alt="WeekendGoldMiner" width={160} height={160} priority />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold-400">
            The Weekend Goldminer&apos;s Field Guide
          </h1>
          <p className="text-lg text-earth-200 mb-8 max-w-2xl mx-auto">
            Everything you need to know about recreational gold prospecting — where to go, what to bring, and how to do it right.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex bg-earth-700 rounded-lg overflow-hidden border border-earth-500">
              <input
                type="text"
                placeholder="Search locations, guides, equipment..."
                className="flex-1 px-4 py-3 bg-transparent text-earth-100 placeholder-earth-400 outline-none"
                disabled
              />
              <button className="px-6 py-3 bg-gold-600 text-white font-medium hover:bg-gold-500 transition-colors">
                Search
              </button>
            </div>
            <p className="text-earth-400 text-xs mt-2">Search coming soon</p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <PlaceholderCard key={article.title} title={article.title} description={article.description} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">
            View all guides →
          </Link>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="bg-earth-100 dark:bg-dark-surface py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-8">Quick Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool) => (
              <div key={tool.title} className="bg-white dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold-100 rounded-lg mb-4 flex items-center justify-center text-gold-600 text-xl">
                  🛠️
                </div>
                <h3 className="text-lg font-bold text-earth-800 dark:text-dark-text mb-2">{tool.title}</h3>
                <p className="text-earth-600 dark:text-earth-300 text-sm">{tool.description}</p>
                <p className="text-earth-400 text-xs mt-3 italic">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <PlaceholderCard key={news.title} title={news.title} description={news.description} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">
            All news &amp; updates →
          </Link>
        </div>
      </section>
    </div>
  );
}
