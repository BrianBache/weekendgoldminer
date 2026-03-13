import Link from "next/link";
import { getStateData, StateData, StateLocation, StateResource } from "@/lib/states";

function slugToState(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PageProps {
  params: Promise<{ state: string }>;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ResourceCard({ resource }: { resource: StateResource }) {
  return (
    <div className="bg-earth-50 dark:bg-dark-bg border border-earth-200 dark:border-earth-700 rounded-lg p-4">
      <p className="font-semibold text-earth-900 dark:text-dark-text text-sm mb-1">
        {resource.name}
      </p>
      <p className="text-earth-600 dark:text-earth-300 text-sm mb-3 leading-relaxed">
        {resource.description}
      </p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#1C2526" }}
        className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-semibold px-4 py-2 rounded-lg text-sm transition-colors border border-gold-800"
      >
        Visit Site →
      </a>
    </div>
  );
}

function LocationCard({ loc }: { loc: StateLocation }) {
  return (
    <div className="bg-earth-50 dark:bg-dark-bg border border-earth-200 dark:border-earth-700 rounded-lg p-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-bold text-earth-900 dark:text-dark-text">{loc.name}</h4>
        {loc.permitRequired !== undefined && (
          <span className="bg-earth-100 dark:bg-earth-800 text-earth-700 dark:text-earth-200 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">
            {loc.permitRequired ? "Permit Required" : "No Permit"}
          </span>
        )}
      </div>

      {(loc.county || loc.location) && (
        <p className="text-earth-500 dark:text-earth-400 text-xs mb-2">
          📍 {[loc.county, loc.location].filter(Boolean).join(" — ")}
        </p>
      )}

      <p className="text-earth-700 dark:text-earth-300 text-sm leading-relaxed mb-3">
        {loc.description}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-earth-600 dark:text-earth-400 mb-3">
        {loc.goldType && (
          <span>
            ✨ <span className="font-medium">Gold type:</span> {loc.goldType}
          </span>
        )}
        {loc.landManagement && (
          <span>
            🏛️ <span className="font-medium">Managed by:</span> {loc.landManagement}
          </span>
        )}
        {loc.accessModel && (
          <span>
            🚪 <span className="font-medium">Access:</span> {loc.accessModel}
          </span>
        )}
        {loc.estimatedCost && (
          <span>
            💰 <span className="font-medium">Cost:</span> {loc.estimatedCost}
          </span>
        )}
      </div>

      {loc.permitNotes && (
        <p className="text-earth-600 dark:text-earth-400 text-xs italic mb-3">
          ℹ️ {loc.permitNotes}
        </p>
      )}

      {loc.notes && (
        <p className="text-earth-600 dark:text-earth-400 text-xs mb-3">
          📝 {loc.notes}
        </p>
      )}

      <a
        href={loc.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#1C2526" }}
        className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-semibold px-4 py-2 rounded-lg text-sm transition-colors border border-gold-800"
      >
        {loc.urlLabel ?? "More Info"} →
      </a>
    </div>
  );
}

// ─── Populated sections ───────────────────────────────────────────────────────

function RegulationsSection({ data }: { data: StateData }) {
  const { regulationSummary: regs } = data;
  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text">
            Regulations Summary
          </h2>
          <span className="text-xs text-earth-500 dark:text-earth-400">
            Last researched: {data.lastResearched}
          </span>
        </div>

        <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-5">
          {regs.overview}
        </p>

        {regs.keyRules.length > 0 && (
          <div className="mb-5">
            <h3 className="font-semibold text-earth-800 dark:text-dark-text mb-2 text-sm uppercase tracking-wide">
              Key Rules
            </h3>
            <ul className="space-y-2">
              {regs.keyRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-earth-700 dark:text-earth-300">
                  <span className="text-gold-500 mt-0.5">▸</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(regs.hpaRequired !== undefined || regs.hpaInfo) && (
          <div className="mb-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
              HPA (Hydraulic Project Approval)
              {regs.hpaRequired !== undefined && (
                <span className="ml-2 bg-earth-100 dark:bg-earth-800 text-earth-700 dark:text-earth-200 text-xs font-medium px-2 py-1 rounded-full">
                  {regs.hpaRequired ? "Required" : "Not Required"}
                </span>
              )}
            </p>
            {regs.hpaInfo && (
              <p className="text-sm text-blue-700 dark:text-blue-300">{regs.hpaInfo}</p>
            )}
          </div>
        )}

        {regs.suctionDredgeStatus && (
          <div className="mb-4 bg-earth-50 dark:bg-dark-bg border border-earth-200 dark:border-earth-700 rounded p-4">
            <p className="text-sm font-semibold text-earth-800 dark:text-dark-text mb-1">
              Suction Dredging Status
            </p>
            <p className="text-sm text-earth-700 dark:text-earth-300">{regs.suctionDredgeStatus}</p>
          </div>
        )}

        {regs.handPanning && (
          <div className="mb-4 bg-earth-50 dark:bg-dark-bg border border-earth-200 dark:border-earth-700 rounded p-4">
            <p className="text-sm font-semibold text-earth-800 dark:text-dark-text mb-1">
              Hand Panning
            </p>
            <p className="text-sm text-earth-700 dark:text-earth-300">{regs.handPanning}</p>
          </div>
        )}

        {/* Disclaimer callout */}
        <div className="mt-5 bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 rounded p-4">
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            ⚠️ <strong>Important:</strong> {regs.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection({ data }: { data: StateData }) {
  const hasBLM = data.blmResources.length > 0;
  const hasDNR = data.dnrResources.length > 0;

  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-6">
          BLM & DNR Resources
        </h2>

        {!hasBLM && !hasDNR && (
          <p className="text-earth-500 dark:text-earth-400 text-sm italic">
            Resource links for {data.displayName} are being researched and will be added soon.
          </p>
        )}

        {hasBLM && (
          <div className="mb-6">
            <h3 className="font-semibold text-earth-800 dark:text-dark-text mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="text-gold-500">🏛️</span> Federal — BLM
            </h3>
            <div className="space-y-3">
              {data.blmResources.map((r, i) => (
                <ResourceCard key={i} resource={r} />
              ))}
            </div>
          </div>
        )}

        {hasDNR && (
          <div>
            <h3 className="font-semibold text-earth-800 dark:text-dark-text mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="text-gold-500">🌲</span> State — DNR / Natural Resources
            </h3>
            <div className="space-y-3">
              {data.dnrResources.map((r, i) => (
                <ResourceCard key={i} resource={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function LocationsSection({ data }: { data: StateData }) {
  const hasPublic = data.publicLocations.length > 0;
  const hasPrivate = data.privateLocations.length > 0;

  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-6">
          Find Locations
        </h2>

        {!hasPublic && !hasPrivate && (
          <p className="text-earth-500 dark:text-earth-400 text-sm italic">
            Prospecting locations for {data.displayName} are being researched and will be added soon.
          </p>
        )}

        {hasPublic && (
          <div className="mb-8">
            <h3 className="font-semibold text-earth-800 dark:text-dark-text mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="text-gold-500">🌍</span> Public Areas (BLM / National Forest / State Land)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.publicLocations.map((loc, i) => (
                <LocationCard key={i} loc={loc} />
              ))}
            </div>
          </div>
        )}

        {hasPrivate && (
          <div>
            <h3 className="font-semibold text-earth-800 dark:text-dark-text mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="text-gold-500">💎</span> Private & Pay-to-Mine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.privateLocations.map((loc, i) => (
                <LocationCard key={i} loc={loc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Placeholder sections (fallback) ─────────────────────────────────────────

function PlaceholderRegulations({ stateName }: { stateName: string }) {
  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">
          Regulations Summary
        </h2>
        <p className="text-earth-600 dark:text-earth-300 mb-4">
          Detailed regulations and requirements for prospecting in{" "}
          <span className="font-semibold">{stateName}</span> will be displayed here.
        </p>
        <div className="bg-earth-50 dark:bg-dark-bg p-4 rounded text-sm text-earth-700 dark:text-earth-300">
          <p>Placeholder: State-specific regulations content</p>
        </div>
      </div>
    </section>
  );
}

function PlaceholderResources({ stateName }: { stateName: string }) {
  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">
          BLM & DNR Resources
        </h2>
        <p className="text-earth-600 dark:text-earth-300 mb-4">
          Official links to Bureau of Land Management and Department of Natural Resources offices serving{" "}
          {stateName}.
        </p>
        <div className="bg-earth-50 dark:bg-dark-bg p-4 rounded text-sm text-earth-700 dark:text-earth-300">
          <p>Placeholder: BLM/DNR contact information and links</p>
        </div>
      </div>
    </section>
  );
}

function PlaceholderLocations({ stateName }: { stateName: string }) {
  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-dark-surface border-2 border-earth-200 dark:border-earth-700 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">
          Popular Prospecting Areas
        </h2>
        <p className="text-earth-600 dark:text-earth-300 mb-4">
          Discover popular gold prospecting locations and districts in{" "}
          <span className="font-semibold">{stateName}</span>.
        </p>
        <div className="bg-earth-50 dark:bg-dark-bg p-4 rounded text-sm text-earth-700 dark:text-earth-300">
          <p>Placeholder: Popular prospecting areas and locations</p>
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default async function StateDetailPage({ params }: PageProps) {
  const { state } = await params;
  const stateName = slugToState(state);
  const stateData = await getStateData(state);

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Hero Header */}
      <div className="relative overflow-hidden py-14 px-4" style={{ backgroundColor: "#1C2526" }}>
        {/* Topographic SVG background pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                <circle cx="70" cy="70" r="60" fill="none" stroke="#c89c2a" strokeWidth="1"/>
                <circle cx="70" cy="70" r="44" fill="none" stroke="#c89c2a" strokeWidth="1"/>
                <circle cx="70" cy="70" r="28" fill="none" stroke="#c89c2a" strokeWidth="1"/>
                <circle cx="70" cy="70" r="12" fill="none" stroke="#c89c2a" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/find-locations"
            className="text-gold-400 hover:text-gold-300 mb-8 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
          >
            ← Back to All States
          </Link>
          <div className="text-center mt-2">
            <div className="text-6xl mb-4">⛏️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gold-400">
              {stateData ? stateData.displayName : stateName}
            </h1>
            <p className="text-earth-200 mt-3 text-lg">Gold Prospecting Guide</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {stateData ? (
          <>
            <RegulationsSection data={stateData} />
            <ResourcesSection data={stateData} />
            <LocationsSection data={stateData} />
          </>
        ) : (
          <>
            <PlaceholderRegulations stateName={stateName} />
            <PlaceholderResources stateName={stateName} />
            <PlaceholderLocations stateName={stateName} />
          </>
        )}

        {/* Legal Disclaimer */}
        <div className="bg-earth-100 dark:bg-dark-surface border-l-4 border-earth-800 dark:border-earth-700 rounded p-6 mb-8">
          <p className="text-earth-800 dark:text-dark-text text-sm leading-relaxed">
            <strong>Legal Disclaimer:</strong> Always verify regulations with local, state, and
            federal authorities before prospecting.
          </p>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-center">
          <Link
            href="/find-locations"
            className="text-gold-400 hover:text-gold-300 font-semibold transition-colors inline-flex items-center gap-1 text-sm"
          >
            ← Back to All States
          </Link>
        </div>
      </div>
    </div>
  );
}
