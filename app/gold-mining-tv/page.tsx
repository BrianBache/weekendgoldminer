import Link from 'next/link';

export default function GoldMiningTVPage() {
  const seasons = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Gold Mining TV</h1>
          <p className="text-earth-200">Your guide to Gold Rush episodes and equipment</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-earth-100 border-b border-earth-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6">
          <Link href="/gold-mining-tv/gear" className="text-earth-800 hover:text-gold-600 font-semibold transition">
            Gear Used on Show
          </Link>
          <Link href="/gold-mining-tv/cast" className="text-earth-800 hover:text-gold-600 font-semibold transition">
            Cast Bios
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-earth-800 mb-8">Gold Rush Episode Guide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <div
              key={season}
              className="bg-white border-2 border-earth-300 rounded-lg p-6 hover:shadow-lg hover:border-gold-400 transition cursor-pointer"
            >
              <div className="aspect-video bg-earth-200 rounded mb-4 flex items-center justify-center">
                <span className="text-earth-600">Season {season}</span>
              </div>
              <h3 className="text-lg font-bold text-earth-800 mb-2">Season {season}</h3>
              <p className="text-earth-600 text-sm">Episodes and highlights coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
