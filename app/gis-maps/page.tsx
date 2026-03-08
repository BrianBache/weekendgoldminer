import PageHeader from '@/components/PageHeader';

export default function GISMapsPage() {
  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader title="GIS Maps & Mapping Tools" subtitle="Explore interactive maps for gold prospecting locations" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Interactive Map Placeholder */}
        <div className="mb-12">
          <div className="bg-gray-200 dark:bg-dark-surface border-2 border-gray-300 rounded-lg min-h-96 flex items-center justify-center">
            <p className="text-gray-600 dark:text-earth-400 text-lg font-medium">Interactive map coming soon</p>
          </div>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Land Ownership */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 border-l-4 border-gold-600">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Land Ownership</h2>
            <p className="text-earth-700 dark:text-earth-300 mb-4">
              Identify public lands, private properties, and BLM/Forest Service territories available for prospecting.
            </p>
            <p className="text-sm text-earth-600 dark:text-earth-300">
              Understand land ownership patterns to find accessible areas for gold panning and mining activities.
            </p>
          </div>

          {/* Claims & Boundaries */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 border-l-4 border-gold-600">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Claims & Boundaries</h2>
            <p className="text-earth-700 dark:text-earth-300 mb-4">
              View active mining claims and staked boundaries to avoid restricted areas.
            </p>
            <p className="text-sm text-earth-600 dark:text-earth-300">
              Find unclaimed areas where you can legally pan for gold or conduct prospecting activities.
            </p>
          </div>

          {/* Streams & Watersheds */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 border-l-4 border-gold-600">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Streams & Watersheds</h2>
            <p className="text-earth-700 dark:text-earth-300 mb-4">
              Locate waterways and drainage basins known for gold deposits and alluvial formations.
            </p>
            <p className="text-sm text-earth-600 dark:text-earth-300">
              Discover streams and tributaries where historical gold activity has been documented.
            </p>
          </div>

          {/* Hazard & Closure Areas */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 border-l-4 border-gold-600">
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Hazard & Closure Areas</h2>
            <p className="text-earth-700 dark:text-earth-300 mb-4">
              Stay informed about environmental restrictions, closures, and hazardous zones.
            </p>
            <p className="text-sm text-earth-600 dark:text-earth-300">
              Know which areas are off-limits due to environmental protections or seasonal restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
