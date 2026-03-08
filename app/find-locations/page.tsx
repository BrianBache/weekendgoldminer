import Link from "next/link";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function stateToSlug(state: string): string {
  return state.toLowerCase().replace(/\s+/g, "-");
}

export default function FindLocationsPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header Section */}
      <div className="bg-earth-800 text-gold-400 py-12 px-4">
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
        {/* States Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {US_STATES.map((state) => (
            <Link
              key={state}
              href={`/find-locations/${stateToSlug(state)}`}
              className="bg-white border-2 border-earth-200 rounded-lg p-4 text-center hover:bg-gold-50 hover:border-gold-400 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-earth-800 font-semibold">{state}</span>
            </Link>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-earth-100 border-l-4 border-earth-800 rounded p-6 max-w-3xl">
          <p className="text-earth-800 text-sm leading-relaxed">
            <strong>Legal Disclaimer:</strong> Always verify regulations with
            local, state, and federal authorities before prospecting.
          </p>
        </div>
      </div>
    </div>
  );
}
