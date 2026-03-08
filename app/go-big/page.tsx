import Link from 'next/link';

export default function GoBigPage() {
  const sections = [
    {
      title: 'Heavy Equipment & Auctions',
      description: 'Find the equipment you need for your mining operation',
      href: '/go-big/heavy-equipment',
    },
    {
      title: 'Claim Finding',
      description: 'Learn how to find and evaluate mining claims',
      href: '/go-big/claim-finding',
    },
    {
      title: 'Scaling Guides',
      description: 'Grow your operation from hobby to business',
      href: '/go-big/scaling',
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-earth-800 dark:bg-dark-bg py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Go Big or Go Home</h1>
          <p className="text-earth-200">Scale your mining operation to the next level</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8 hover:shadow-lg hover:border-gold-400 transition cursor-pointer h-full">
                <div className="w-12 h-12 bg-gold-400 rounded-full mb-4"></div>
                <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-3">{section.title}</h2>
                <p className="text-earth-600 dark:text-earth-300 mb-4">{section.description}</p>
                <span className="inline-flex items-center text-gold-600 font-semibold">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
