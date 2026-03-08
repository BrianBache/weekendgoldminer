import USMap from "@/components/USMap";
import PageHeader from "@/components/PageHeader";

export default function FindLocationsPage() {
  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader title="Find Gold Prospecting Locations" subtitle="Explore gold prospecting opportunities across all 50 US states. Click a state to discover regulations, Bureau of Land Management links, and popular prospecting areas." />

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
