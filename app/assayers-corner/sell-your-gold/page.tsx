export default function SellYourGold() {
  const reputationTiers = [
    {
      name: 'Verified',
      color: 'bg-gold-100 border-gold-500',
      textColor: 'text-gold-700',
      description: 'Independently audited, high customer ratings, full business verification, and proven track record.',
    },
    {
      name: 'Trusted',
      color: 'bg-earth-100 border-earth-500',
      textColor: 'text-earth-700',
      description: 'Solid reputation with multiple positive reviews, established business history, and good customer feedback.',
    },
    {
      name: 'Listed',
      color: 'bg-blue-100 border-blue-500',
      textColor: 'text-blue-700',
      description: 'Registered buyers with basic information provided. User reviews still pending or limited.',
    },
    {
      name: 'Unrated',
      color: 'bg-gray-100 border-gray-400',
      textColor: 'text-gray-700',
      description: 'New or less common buyers without sufficient reviews yet. Exercise caution and do your own research.',
    },
  ];

  const statesData = [
    {
      state: 'California',
      counties: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
    },
    {
      state: 'Colorado',
      counties: ['Denver', 'Boulder', 'El Paso', 'Clear Creek'],
    },
    {
      state: 'Oregon',
      counties: ['Multnomah', 'Marion', 'Lane', 'Jackson'],
    },
    {
      state: 'Washington',
      counties: ['King', 'Pierce', 'Snohomish', 'Spokane'],
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Sell Your Gold</h1>
          <p className="text-xl text-earth-100">Trusted Buyer Directory</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-earth-800 mb-4">Find Trusted Gold Buyers</h2>
          <p className="text-earth-600 text-lg mb-4">
            Our directory helps you find reputable buyers in your area. Each buyer is rated using our
            4-tier reputation system so you can make an informed decision about where to sell your gold.
          </p>
          <p className="text-amber-600 font-semibold">
            Note: No real listings yet — directory launching soon
          </p>
        </div>

        {/* Reputation System */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-earth-800 mb-6">Understanding Our Reputation System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reputationTiers.map((tier) => (
              <div
                key={tier.name}
                className={`${tier.color} border-l-4 rounded-lg p-6 shadow`}
              >
                <h3 className={`text-xl font-bold ${tier.textColor} mb-2`}>{tier.name}</h3>
                <p className="text-earth-700">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directory Structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-earth-800 mb-6">Find Buyers by Location</h2>
          <div className="space-y-4">
            {statesData.map((stateData) => (
              <div key={stateData.state} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-earth-100 px-6 py-4 border-l-4 border-gold-500">
                  <h3 className="text-lg font-bold text-earth-800">{stateData.state}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {stateData.counties.map((county) => (
                      <button
                        key={county}
                        className="px-4 py-2 bg-earth-50 border border-earth-300 rounded text-earth-700 hover:bg-gold-100 hover:border-gold-400 transition-colors font-medium text-sm"
                      >
                        {county}
                      </button>
                    ))}
                  </div>
                  <p className="text-earth-500 text-sm mt-4">
                    More counties coming soon...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Launching Soon</h3>
          <p className="text-lg mb-4">
            Be the first to know when verified gold buyers are added to our directory. Sign up for updates.
          </p>
          <button className="bg-white text-gold-700 font-bold px-6 py-3 rounded-lg hover:bg-earth-50 transition-colors">
            Notify Me When Available
          </button>
        </div>
      </div>
    </div>
  );
}
