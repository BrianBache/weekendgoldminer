import Link from "next/link";

function slugToState(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PageProps {
  params: Promise<{ state: string }>;
}

export default async function StateDetailPage({ params }: PageProps) {
  const { state } = await params;
  const stateName = slugToState(state);

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 text-gold-400 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/find-locations"
            className="text-gold-300 hover:text-gold-200 mb-4 inline-block text-sm font-semibold"
          >
            ← Back to All States
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">{stateName}</h1>
          <p className="text-earth-200 mt-2">Gold Prospecting Guide</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Regulations Summary Section */}
        <section className="mb-8">
          <div className="bg-white border-2 border-earth-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">
              Regulations Summary
            </h2>
            <p className="text-earth-600 mb-4">
              Detailed regulations and requirements for prospecting in{" "}
              <span className="font-semibold">{stateName}</span> will be
              displayed here.
            </p>
            <div className="bg-earth-50 p-4 rounded text-sm text-earth-700">
              <p>Placeholder: State-specific regulations content</p>
            </div>
          </div>
        </section>

        {/* BLM/DNR Links Section */}
        <section className="mb-8">
          <div className="bg-white border-2 border-earth-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">
              BLM & DNR Resources
            </h2>
            <p className="text-earth-600 mb-4">
              Official links to Bureau of Land Management and Department of
              Natural Resources offices serving {stateName}.
            </p>
            <div className="bg-earth-50 p-4 rounded text-sm text-earth-700">
              <p>Placeholder: BLM/DNR contact information and links</p>
            </div>
          </div>
        </section>

        {/* Popular Areas Section */}
        <section className="mb-8">
          <div className="bg-white border-2 border-earth-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-earth-800 mb-4">
              Popular Prospecting Areas
            </h2>
            <p className="text-earth-600 mb-4">
              Discover popular gold prospecting locations and districts in{" "}
              <span className="font-semibold">{stateName}</span>.
            </p>
            <div className="bg-earth-50 p-4 rounded text-sm text-earth-700">
              <p>Placeholder: Popular prospecting areas and locations</p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <div className="bg-earth-100 border-l-4 border-earth-800 rounded p-6 mb-8">
          <p className="text-earth-800 text-sm leading-relaxed">
            <strong>Legal Disclaimer:</strong> Always verify regulations with
            local, state, and federal authorities before prospecting.
          </p>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-center">
          <Link
            href="/find-locations"
            className="bg-earth-800 text-gold-400 hover:bg-earth-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Back to All States
          </Link>
        </div>
      </div>
    </div>
  );
}
