import Link from "next/link";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function EquipmentCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const displayName = slugToDisplayName(category);

  const products = [
    {
      id: 1,
      name: `Premium ${displayName} Tool`,
      price: "$49.99",
      rating: 4.8,
    },
    {
      id: 2,
      name: `Professional ${displayName} Kit`,
      price: "$89.99",
      rating: 4.6,
    },
    {
      id: 3,
      name: `Budget-Friendly ${displayName}`,
      price: "$29.99",
      rating: 4.5,
    },
    {
      id: 4,
      name: `Heavy-Duty ${displayName} Series`,
      price: "$129.99",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/equipment" className="text-earth-100 hover:text-white mb-4 inline-block">
            ← Back to Equipment
          </Link>
          <h1 className="text-4xl font-bold mb-2">{displayName}</h1>
          <p className="text-earth-100">Browse and compare {displayName.toLowerCase()} equipment</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-gold-600 hover:shadow-lg transition-shadow"
              >
                <div className="bg-earth-100 h-48 flex items-center justify-center">
                  <p className="text-earth-600">Product Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-earth-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gold-600">{product.price}</span>
                    <span className="text-sm text-gold-600 font-semibold">★ {product.rating}</span>
                  </div>
                  <div className="bg-earth-50 border border-earth-200 rounded p-3 mb-4">
                    <p className="text-xs text-earth-600 text-center">
                      Affiliate link placeholder - Full product details coming soon
                    </p>
                  </div>
                  <button className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-gold-600">
          <h2 className="text-3xl font-bold text-earth-800 mb-6">Expert Review</h2>
          <div className="prose prose-sm max-w-none text-earth-700">
            <p className="mb-4">
              This comprehensive guide covers everything you need to know about selecting {displayName.toLowerCase()} for your gold prospecting adventures. Whether you're a seasoned prospector or just starting out, we've tested and reviewed the top products in this category.
            </p>
            <h3 className="text-xl font-bold text-earth-800 mt-6 mb-3">What to Look For</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-earth-700">
              <li>Durability and build quality</li>
              <li>Ease of use and setup</li>
              <li>Effectiveness for gold prospecting</li>
              <li>Value for money</li>
              <li>Portability and storage</li>
            </ul>
            <h3 className="text-xl font-bold text-earth-800 mt-6 mb-3">Our Top Pick</h3>
            <p className="mb-4">
              After extensive testing, we recommend the Premium {displayName} Tool for most prospectors. It offers the best balance of performance, durability, and affordability, making it an excellent choice for weekend gold miners.
            </p>
            <h3 className="text-xl font-bold text-earth-800 mt-6 mb-3">Tips for Success</h3>
            <ol className="list-decimal list-inside space-y-2 text-earth-700">
              <li>Start with quality equipment to improve your results</li>
              <li>Learn proper technique from experienced prospectors</li>
              <li>Always follow local regulations and obtain necessary permits</li>
              <li>Invest in safety gear appropriate for your activity</li>
              <li>Join a local prospecting club for tips and access to claims</li>
            </ol>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/equipment"
            className="inline-block bg-earth-800 hover:bg-earth-900 text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            Back to Equipment Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
