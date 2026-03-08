"use client";

import Link from "next/link";
import { useMembership } from "./MembershipContext";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Find Locations", href: "/find-locations" },
      { label: "GIS Maps", href: "/gis-maps" },
      { label: "Equipment", href: "/equipment" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Updates", href: "/news" },
      { label: "Assayer's Corner", href: "/assayers-corner" },
      { label: "Gold Mining TV", href: "/gold-mining-tv" },
      { label: "Go Big or Go Home", href: "/go-big" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Join", href: "/membership" },
      { label: "Login", href: "/membership/login" },
      { label: "About / Contact", href: "/about" },
    ],
  },
];

export default function Footer() {
  const { isMember, toggleMember } = useMembership();

  return (
    <footer className="bg-earth-800 dark:bg-dark-bg text-earth-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">&#9935;&#65039; WeekendGoldMiner</h3>
            <p className="text-sm text-earth-300">
              The weekend prospector&apos;s field guide. Your trusted source for gold prospecting information, equipment reviews, and location data.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gold-400 font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-earth-600 dark:border-earth-700 mt-8 pt-8">
          <p className="text-xs text-earth-400 leading-relaxed">
            <strong>Legal Disclaimer:</strong> The information provided on WeekendGoldMiner.com is for informational purposes only and does not constitute legal advice. Always verify regulations with local, state, and federal authorities before prospecting. Laws and regulations change frequently. WeekendGoldMiner.com assumes no liability for actions taken based on information presented on this site.
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-earth-500">
              &copy; {new Date().getFullYear()} WeekendGoldMiner.com. All rights reserved.
            </p>
            <button
              onClick={toggleMember}
              className="text-[10px] text-earth-600 dark:text-earth-500 hover:text-earth-400 transition-colors opacity-50 hover:opacity-100"
            >
              {isMember ? "✓ Member Preview ON" : "Toggle Member Preview"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
