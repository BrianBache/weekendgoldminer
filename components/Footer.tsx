"use client";

import Link from "next/link";
import { useMembership } from "./MembershipContext";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Find Locations", href: "/find-locations" },
  { label: "Equipment", href: "/equipment" },
  { label: "Guides", href: "/guides" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

export default function Footer() {
  const { isMember, toggleMember } = useMembership();

  return (
    <footer className="bg-earth-800 dark:bg-dark-bg text-earth-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-10">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm hover:text-gold-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-xs text-earth-400 text-center leading-relaxed max-w-3xl mx-auto mb-8">
          WeekendGoldMiner.com is an independent resource. Always check local regulations before prospecting.
          The information provided on this site is for informational purposes only and does not constitute legal advice.
          Laws and regulations change frequently — verify with local, state, and federal authorities before heading out.
        </p>

        {/* Copyright */}
        <div className="border-t border-earth-600 dark:border-earth-700 pt-6 flex items-center justify-between">
          <p className="text-xs text-earth-500">
            &copy; 2026 WeekendGoldMiner.com
          </p>
          <button
            onClick={toggleMember}
            className="text-[10px] text-earth-600 dark:text-earth-500 hover:text-earth-400 transition-colors opacity-50 hover:opacity-100"
          >
            {isMember ? "✓ Member Preview ON" : "Toggle Member Preview"}
          </button>
        </div>
      </div>
    </footer>
  );
}
