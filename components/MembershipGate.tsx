"use client";

import Link from "next/link";
import { useMembership } from "./MembershipContext";

export default function MembershipGate({ children }: { children: React.ReactNode }) {
  const { isMember } = useMembership();

  if (isMember) return <>{children}</>;

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 z-40" />
      <div className="relative z-50 bg-white dark:bg-dark-surface border-2 border-gold-400 rounded-2xl p-10 max-w-lg w-full text-center shadow-2xl">
        <div className="text-5xl mb-6">&#128274;</div>
        <h2 className="text-3xl font-bold text-earth-900 dark:text-dark-text mb-4">Members Only</h2>
        <p className="text-earth-600 dark:text-earth-300 mb-6 leading-relaxed">
          GIS Maps, Assayer&apos;s Corner, and Go Big or Go Home are available to WeekendGoldMiner members.
        </p>
        <p className="text-earth-700 dark:text-earth-200 font-semibold mb-8">
          $1/month or $10/year &mdash; cancel anytime
        </p>
        <Link
          href="/membership"
          className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg mb-4 w-full"
        >
          Join Now
        </Link>
        <div>
          <Link
            href="/membership/login"
            className="text-gold-600 hover:text-gold-500 font-medium transition-colors"
          >
            Already a member? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
