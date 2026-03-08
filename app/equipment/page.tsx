import Link from "next/link";

export default function EquipmentPage() {
  const categories = [
    { name: "Panning", slug: "panning" },
    { name: "Sluices", slug: "sluices" },
    { name: "Detectors", slug: "detectors" },
    { name: "Accessories", slug: "accessories" },
    { name: "Highbankers", slug: "highbankers" },
    { name: "Classifiers", slug: "classifiers" },
    { name: "Pumps", slug: "pumps" },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Equipment & Reviews</h1>
          <p className="text-earth-100">Find the best gold prospecting equipment and read expert reviews</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 mb-8">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/equipment/${category.slug}`}>
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gold-600 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-bold text-earth-800">{category.name}</h3>
                  <p className="text-earth-600 text-sm mt-2">
                    Explore {category.name.toLowerCase()} equipment and find your perfect match
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Reviews Section */}
        <div>
          <h2 className="text-3xl font-bold text-earth-800 mb-8">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gold-600">
              <div className="bg-earth-100 h-40 flex items-center justify-center">
                <p className="text-earth-600">Product Image Placeholder</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-earth-800">Premium Gold Pan Review</h3>
                  <span className="text-gold-600 font-bold">4.8/5</span>
                </div>
                <p className="text-earth-700 text-sm mb-4">
                  A comprehensive review of the top-rated 14" gold pan, including durability, ease of use, and value for money.
                </p>
                <p className="text-xs text-earth-500">Category: Panning • Published 2 weeks ago</p>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gold-600">
              <div className="bg-earth-100 h-40 flex items-center justify-center">
                <p className="text-earth-600">Product Image Placeholder</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-earth-800">Sluice Box Comparison</h3>
                  <span className="text-gold-600 font-bold">4.6/5</span>
                </div>
                <p className="text-earth-700 text-sm mb-4">
                  Compare three popular portable sluice boxes for creek prospecting, highlighting pros and cons of each model.
                </p>
                <p className="text-xs text-earth-500">Category: Sluices • Published 3 weeks ago</p>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gold-600">
              <div className="bg-earth-100 h-40 flex items-center justify-center">
                <p className="text-earth-600">Product Image Placeholder</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-earth-800">Metal Detector Buyer's Guide</h3>
                  <span className="text-gold-600 font-bold">4.7/5</span>
                </div>
                <p className="text-earth-700 text-sm mb-4">
                  In-depth guide to selecting the right metal detector for gold prospecting, from beginner to advanced models.
                </p>
                <p className="text-xs text-earth-500">Category: Detectors • Published 1 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
