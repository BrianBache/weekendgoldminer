"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useMembership } from "./MembershipContext";

interface NavItem {
  label: string;
  href: string;
  locked?: boolean;
  children?: { label: string; href: string }[];
}

const freeItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Find Locations",
    href: "/find-locations",
    children: [
      { label: "By State", href: "/find-locations" },
      { label: "By County", href: "/find-locations" },
      { label: "Federal Lands", href: "/find-locations" },
      { label: "Regulations", href: "/find-locations" },
    ],
  },
  {
    label: "Equipment & Reviews",
    href: "/equipment",
    children: [
      { label: "Panning", href: "/equipment/panning" },
      { label: "Sluices", href: "/equipment/sluices" },
      { label: "Detectors", href: "/equipment/detectors" },
      { label: "Accessories", href: "/equipment/accessories" },
    ],
  },
  {
    label: "Prospecting Guides",
    href: "/guides",
    children: [
      { label: "Beginner", href: "/guides" },
      { label: "Techniques", href: "/guides" },
      { label: "Safety", href: "/guides" },
      { label: "Seasonal", href: "/guides" },
    ],
  },
  {
    label: "News & Updates",
    href: "/news",
    children: [
      { label: "National", href: "/news" },
      { label: "State", href: "/news" },
      { label: "Local", href: "/news" },
      { label: "Industry", href: "/news" },
    ],
  },
  {
    label: "Gold Mining TV",
    href: "/gold-mining-tv",
    children: [
      { label: "Episode Guides", href: "/gold-mining-tv" },
      { label: "Gear Used on Show", href: "/gold-mining-tv/gear" },
      { label: "Cast Bios", href: "/gold-mining-tv/cast" },
    ],
  },
];

const memberItems: NavItem[] = [
  {
    label: "GIS Maps",
    href: "/gis-maps",
    locked: true,
    children: [
      { label: "Land Ownership", href: "/gis-maps" },
      { label: "Claims & Boundaries", href: "/gis-maps" },
      { label: "Streams & Watersheds", href: "/gis-maps" },
      { label: "Hazard & Closure Areas", href: "/gis-maps" },
    ],
  },
  {
    label: "Assayer's Corner",
    href: "/assayers-corner",
    locked: true,
    children: [
      { label: "Articles", href: "/assayers-corner" },
      { label: "Gold Value Tool", href: "/assayers-corner/gold-value-tool" },
      { label: "Sell Your Gold Directory", href: "/assayers-corner/sell-your-gold" },
      { label: "DIY Smelting", href: "/assayers-corner/diy-smelting" },
    ],
  },
  {
    label: "Go Big or Go Home",
    href: "/go-big",
    locked: true,
    children: [
      { label: "Heavy Equipment", href: "/go-big/heavy-equipment" },
      { label: "Claim Finding", href: "/go-big/claim-finding" },
      { label: "Scaling Guides", href: "/go-big/scaling" },
      { label: "Auctions", href: "/go-big/heavy-equipment" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Join", href: "/membership" },
      { label: "Login", href: "/membership/login" },
      { label: "Saved Spots", href: "/membership" },
      { label: "Alerts", href: "/membership" },
    ],
  },
];

function NavItemDesktop({
  item,
  isMember,
  openDropdown,
  toggleDropdown,
  setOpenDropdown,
  premium,
}: {
  item: NavItem;
  isMember: boolean;
  openDropdown: string | null;
  toggleDropdown: (label: string) => void;
  setOpenDropdown: (v: string | null) => void;
  premium?: boolean;
}) {
  const hoverClass = premium
    ? "px-2 py-2 text-xs font-medium hover:text-gold-400 hover:bg-gold-400/[0.07] transition-colors whitespace-nowrap flex items-center gap-1 rounded"
    : "px-2 py-2 text-xs font-medium hover:text-gold-400 transition-colors whitespace-nowrap flex items-center gap-1";

  const linkHoverClass = premium
    ? "px-2 py-2 text-xs font-medium hover:text-gold-400 hover:bg-gold-400/[0.07] transition-colors whitespace-nowrap rounded"
    : "px-2 py-2 text-xs font-medium hover:text-gold-400 transition-colors whitespace-nowrap";

  return (
    <div className="relative h-full flex items-center group">
      {item.children ? (
        <div className="flex items-center">
          <Link href={item.href} className={linkHoverClass}>
            {item.label}
            {item.locked && !isMember && <LockIcon />}
          </Link>
          <button
            onClick={() => toggleDropdown(item.label)}
            className="px-1 py-2 hover:text-gold-400 transition-colors"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      ) : (
        <Link href={item.href} className={linkHoverClass}>
          {item.label}
        </Link>
      )}
      {item.children && openDropdown === item.label && (
        <div className="absolute top-full left-0 bg-earth-700 dark:bg-dark-surface rounded-b-lg shadow-xl min-w-48 py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-4 py-2 text-sm hover:bg-earth-600 dark:hover:bg-earth-700 hover:text-gold-400 transition-colors"
              onClick={() => setOpenDropdown(null)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const LockIcon = () => (
  <span className="text-gold-400 text-[10px] ml-0.5">&#128274;</span>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isMember } = useMembership();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-[36px] left-0 right-0 z-50 text-earth-50 shadow-lg" style={{ height: "70px", backgroundColor: "#1C2526" }}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/logo.png" alt="WeekendGoldMiner" width={120} height={60} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center h-full overflow-x-auto">
          {/* FREE section */}
          <div className="flex items-center gap-1 h-full">
            {freeItems.map((item) => (
              <NavItemDesktop
                key={item.label}
                item={item}
                isMember={isMember}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </div>

          {/* Vertical divider */}
          <div className="mx-2 h-[60%] w-px bg-gold-600/40 self-center" />

          {/* MEMBERS section */}
          <div className="flex items-center gap-1 h-full">
            {memberItems.map((item) => (
              <NavItemDesktop
                key={item.label}
                item={item}
                isMember={isMember}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                setOpenDropdown={setOpenDropdown}
                premium
              />
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-gold-400 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1C2526] dark:bg-dark-bg border-t border-earth-600 dark:border-earth-700 max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* Free section */}
          {freeItems.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isMember={isMember}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              setOpenDropdown={setOpenDropdown}
              setMobileOpen={setMobileOpen}
            />
          ))}

          {/* Members section header */}
          <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-gold-400/70 bg-earth-900 dark:bg-dark-bg border-t border-gold-600/20 border-b border-b-earth-700">
            Members
          </div>

          {/* Member items */}
          {memberItems.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isMember={isMember}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              setOpenDropdown={setOpenDropdown}
              setMobileOpen={setMobileOpen}
              premium
            />
          ))}
        </div>
      )}
    </nav>
  );
}

function MobileNavItem({
  item,
  isMember,
  openDropdown,
  toggleDropdown,
  setOpenDropdown,
  setMobileOpen,
  premium,
}: {
  item: NavItem;
  isMember: boolean;
  openDropdown: string | null;
  toggleDropdown: (label: string) => void;
  setOpenDropdown: (v: string | null) => void;
  setMobileOpen: (v: boolean) => void;
  premium?: boolean;
}) {
  const hoverBg = premium
    ? "hover:bg-gold-400/[0.07] dark:hover:bg-gold-400/[0.07]"
    : "hover:bg-earth-700 dark:hover:bg-dark-surface";

  return (
    <div className="border-b border-earth-700">
      {item.children ? (
        <>
          <button
            onClick={() => toggleDropdown(item.label)}
            className={`w-full text-left px-4 py-3 text-sm font-medium ${hoverBg} flex justify-between items-center`}
          >
            <span>
              {item.label}
              {item.locked && !isMember && <LockIcon />}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === item.label && (
            <div className="bg-earth-900 dark:bg-dark-bg">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-8 py-2 text-sm text-earth-200 hover:text-gold-400"
                  onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={`block px-4 py-3 text-sm font-medium ${hoverBg}`}
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
}
