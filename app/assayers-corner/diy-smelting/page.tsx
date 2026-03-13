export default function DIYSmelting() {
  const sections = [
    {
      title: 'Safety Equipment',
      subsections: [
        'Heat-resistant crucibles and tongs',
        'Safety goggles and face shield',
        'Heat-resistant gloves and apron',
        'Dust mask or respirator for fume protection',
        'Fire extinguisher (Class D for metal fires)',
        'First aid kit with burn treatment supplies',
      ],
    },
    {
      title: 'Basic Process',
      subsections: [
        'Preparation of gold material and flux',
        'Furnace setup and temperature control',
        'Melting and degassing procedures',
        'Pouring and casting techniques',
        'Cooling and solidification',
        'Cleaning and finishing',
      ],
    },
    {
      title: 'Common Mistakes',
      subsections: [
        'Insufficient ventilation leading to toxic fume exposure',
        'Inadequate safety equipment or protective gear',
        'Rushing the cooling process',
        'Improper crucible selection for high temperatures',
        'Ignoring local regulations and permits',
        'Attempting smelting without proper training or experience',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-red-700 via-yellow-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">WARNING: Extreme Safety Hazard</h2>
              <p className="text-lg leading-relaxed">
                Smelting involves extreme heat, toxic fumes, and serious safety risks. This content is
                for educational purposes only. Always use proper safety equipment and follow local
                regulations. Improper technique can result in severe burns, respiratory damage, or death.
                Seek professional training before attempting any smelting operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 dark:from-dark-bg dark:to-dark-surface text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">DIY Smelting</h1>
          <p className="text-xl text-earth-100">Educational Resources</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Disclaimer Box */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Educational Purpose Only</h3>
          <p className="text-yellow-800">
            This information is provided for educational understanding only. WeekendGoldMiner.com does
            not recommend or endorse DIY smelting for individuals without professional training and
            proper facilities. Always consult with professional refiners and follow all local, state,
            and federal regulations regarding gold processing.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-6 pb-4 border-b-2 border-gold-400">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.subsections.map((subsection, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-gold-600 font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-earth-700 dark:text-earth-300">{subsection}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-earth-100 dark:bg-dark-surface rounded-lg p-8">
          <h3 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-4">Recommended Resources</h3>
          <p className="text-earth-700 dark:text-earth-300 mb-4">
            Before attempting any smelting work, we strongly recommend:
          </p>
          <ul className="space-y-2 text-earth-700 dark:text-earth-300">
            <li className="flex items-center gap-3">
              <span className="text-gold-600">→</span>
              Consult professional refiners and metallurgists
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold-600">→</span>
              Take certified safety training courses
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold-600">→</span>
              Check local regulations and zoning laws
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold-600">→</span>
              Obtain proper permits and insurance
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold-600">→</span>
              Use facilities with industrial-grade ventilation
            </li>
          </ul>
        </div>

        {/* Final Warning */}
        <div className="mt-12 bg-red-50 border-2 border-red-400 rounded-lg p-8">
          <h3 className="text-xl font-bold text-red-900 mb-3">Critical Safety Notice</h3>
          <p className="text-red-900 leading-relaxed">
            Gold smelting at extreme temperatures (above 1,100°C) produces toxic fumes including carbon
            monoxide, sulfur dioxide, and other hazardous byproducts. Exposure can cause immediate health
            effects or long-term damage. Never attempt this without professional-grade ventilation,
            respiratory protection, and medical supervision available. Many jurisdictions require permits
            and professional licensing for metal smelting operations.
          </p>
        </div>
      </div>
    </div>
  );
}
