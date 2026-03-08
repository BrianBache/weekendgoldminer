import Image from "next/image";
import Link from "next/link";

const options = [
  { label: "Option 1 — Deep Charcoal-Green", color: "#1A2A1A" },
  { label: "Option 2 — Dark Slate", color: "#1C2526" },
  { label: "Option 3 — Dark Espresso", color: "#1A1209" },
  { label: "Option 4 — Current Darkened", color: "#1A1008" },
];

const navLinks = ["Home", "Find Locations", "Equipment & Reviews", "Prospecting Guides", "News & Updates", "Gold Mining TV"];

export default function NavTestPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-earth-800 mb-2">Nav Color Options</h1>
        <p className="text-earth-600 mb-8">Click <Link href="/" className="text-gold-600 underline">here</Link> to go back to the site.</p>
      </div>

      {options.map((opt) => (
        <div key={opt.color} className="mb-10">
          <div className="max-w-4xl mx-auto px-4 mb-2">
            <span className="text-sm font-semibold text-earth-700">{opt.label} &mdash; <code>{opt.color}</code></span>
          </div>
          <nav style={{ backgroundColor: opt.color }} className="w-full px-6 py-3 flex items-center gap-6">
            <div className="flex items-center gap-2 mr-6">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span style={{ color: "#D4A017", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em" }}>GOLDMINER</span>
            </div>
            {navLinks.map((link) => (
              <span key={link} style={{ color: "#E8D5A3", fontSize: "0.85rem", whiteSpace: "nowrap" }}>{link}</span>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
}
