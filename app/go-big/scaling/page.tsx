import Link from 'next/link';

export default function ScalingPage() {
  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-earth-800 dark:bg-dark-bg py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/go-big" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Go Big or Go Home
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Scaling Your Operation</h1>
          <p className="text-earth-200">Grow from hobby miner to serious operator</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* From Pan to Sluice */}
          <section className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">From Pan to Sluice</h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              Start with the basics and understand how to upgrade from simple hand-panning to more sophisticated sluicing operations. This section covers the equipment progression, efficiency gains, and best practices for scaling up your initial mining setup step by step.
            </p>
          </section>

          {/* Adding Power */}
          <section className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">Adding Power</h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              As your operation grows, you'll need to add powered equipment like pumps, classifiers, and wash plants. Learn about the different power sources available, electrical requirements, fuel-powered systems, and how to scale your equipment while maintaining efficiency and managing costs.
            </p>
          </section>

          {/* Equipment Financing */}
          <section className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">Equipment Financing</h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              Heavy equipment is expensive. Discover financing options for your mining machinery, including equipment loans, leasing, government grants, and partnership opportunities. We'll help you understand how to fund your operation expansion responsibly.
            </p>
          </section>

          {/* Permits & Compliance */}
          <section className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">Permits & Compliance</h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              Scaling your operation requires proper permits and environmental compliance. Learn about the regulations you need to follow, the agencies involved, environmental impact assessments, reclamation requirements, and how to stay compliant as your mining operation grows.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
