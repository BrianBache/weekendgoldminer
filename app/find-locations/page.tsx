import USMap from "@/components/USMap";

export default function FindLocationsPage() {
  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header Section */}
      <div className="bg-earth-800 dark:bg-dark-bg text-gold-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Gold Prospecting Locations
          </h1>
          <p className="text-earth-200 text-lg max-w-2xl">
            Explore gold prospecting opportunities across all 50 US states. Click
            a state to discover regulations, Bureau of Land Management links, and
            popular prospecting areas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <USMap />

        {/* Legal Disclaimer */}
        <div className="bg-earth-100 dark:bg-dark-surface border-l-4 border-earth-800 dark:border-earth-700 rounded p-6 max-w-3xl mt-12">
          <p className="text-earth-800 dark:text-dark-text text-sm leading-relaxed">
            <strong>Legal Disclaimer:</strong> Always verify regulations with
            local, state, and federal authorities before prospecting.
          </p>
        </div>
      </div>
    </div>
  );
}
