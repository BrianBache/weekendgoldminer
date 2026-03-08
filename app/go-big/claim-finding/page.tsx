import Link from 'next/link';

export default function ClaimFindingPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/go-big" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Go Big or Go Home
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Claim Finding Guide</h1>
          <p className="text-earth-200">Everything you need to know about mining claims</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* What is a Mining Claim */}
          <section className="bg-white border-2 border-earth-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">What is a Mining Claim?</h2>
            <p className="text-earth-600 leading-relaxed">
              A mining claim is a legal right to extract minerals from a specific piece of land. This section will cover the basics of how mining claims work, the legal requirements, and the different types of claims available. Coming soon with detailed information.
            </p>
          </section>

          {/* Types of Claims */}
          <section className="bg-white border-2 border-earth-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">Types of Claims</h2>
            <p className="text-earth-600 leading-relaxed">
              There are several different types of mining claims, each with unique characteristics and legal requirements. Learn about placer claims, lode claims, millsite claims, and more. This section will help you understand which type of claim is right for your mining operation.
            </p>
          </section>

          {/* Where to Search */}
          <section className="bg-white border-2 border-earth-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">Where to Search</h2>
            <p className="text-earth-600 leading-relaxed">
              Finding the right location for your mining claim is critical to your success. Discover techniques for researching promising areas, evaluating geological surveys, and identifying productive mining regions. This guide will teach you how to search like a professional.
            </p>
          </section>

          {/* How to File */}
          <section className="bg-white border-2 border-earth-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">How to File</h2>
            <p className="text-earth-600 leading-relaxed">
              Filing a mining claim involves navigating government bureaucracy and following specific legal procedures. Learn the step-by-step process for staking claims, filing claims, and maintaining your claims. We'll walk you through the paperwork and requirements you need to know.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
