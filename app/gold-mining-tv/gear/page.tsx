import Link from 'next/link';

export default function GearPage() {
  const equipment = [
    { name: 'Excavators', description: 'Heavy machinery for moving earth and mining material' },
    { name: 'Wash Plants', description: 'Equipment for separating gold from rock and dirt' },
    { name: 'Gold Trommels', description: 'Cylindrical screening systems for gold recovery' },
    { name: 'Sluice Boxes', description: 'Gravity-based separation for smaller operations' },
    { name: 'Classifiers', description: 'Equipment that sorts material by size' },
    { name: 'Drywashers', description: 'Gold recovery without water access' },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/gold-mining-tv" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Gold Mining TV
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Gear Used on the Show</h1>
          <p className="text-earth-200">Equipment featured on Gold Rush and other mining shows</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <div key={item.name} className="bg-white border-2 border-earth-300 rounded-lg p-6 hover:shadow-lg transition">
              <div className="aspect-video bg-earth-200 rounded mb-4 flex items-center justify-center">
                <span className="text-earth-600 text-sm">Equipment Image</span>
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-2">{item.name}</h3>
              <p className="text-earth-600 mb-4">{item.description}</p>
              <div className="p-3 bg-gold-50 border-l-4 border-gold-400 rounded">
                <p className="text-sm text-earth-800">
                  <span className="font-semibold">Affiliate link placeholder:</span> Coming soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
