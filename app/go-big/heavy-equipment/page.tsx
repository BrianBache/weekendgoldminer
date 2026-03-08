import Link from 'next/link';

export default function HeavyEquipmentPage() {
  const auctions = [
    {
      name: 'GovPlanet',
      description: 'Government surplus equipment and vehicles perfect for mining operations',
      type: 'Government Auctions',
    },
    {
      name: 'MachineryTrader',
      description: 'New and used heavy machinery with verified sellers',
      type: 'Machinery Marketplace',
    },
    {
      name: 'IronPlanet',
      description: 'Equipment auctions with online bidding for construction and mining gear',
      type: 'Equipment Auctions',
    },
    {
      name: 'Ritchie Bros',
      description: 'Premium heavy equipment auctions with worldwide reach',
      type: 'Premium Auctions',
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/go-big" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Go Big or Go Home
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Heavy Equipment & Auctions</h1>
          <p className="text-earth-200">Find equipment for your mining operation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {auctions.map((auction) => (
            <div key={auction.name} className="bg-white border-2 border-earth-300 rounded-lg p-8 hover:shadow-lg transition">
              <div className="h-20 bg-earth-200 rounded mb-4 flex items-center justify-center">
                <span className="text-earth-600 font-semibold">{auction.name}</span>
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-2">{auction.name}</h3>
              <p className="text-gold-600 text-sm font-semibold mb-3">{auction.type}</p>
              <p className="text-earth-600 mb-6">{auction.description}</p>
              <div className="p-4 bg-gold-50 border-l-4 border-gold-400 rounded">
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
