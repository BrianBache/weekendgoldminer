'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MembershipPage() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const features = [
    'Saved prospecting spots',
    'Custom alerts',
    'Ad-free experience',
    'Early access to tools',
  ];

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-earth-800 dark:bg-dark-bg py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Join WeekendGoldMiner</h1>
          <p className="text-earth-200">Get premium access to tools and guides</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {/* Monthly Plan */}
          <div
            className={`border-2 rounded-lg p-8 transition ${
              hoveredPlan === 'monthly'
                ? 'border-gold-400 bg-gold-50 shadow-lg'
                : 'border-earth-300 dark:border-earth-700 bg-white dark:bg-dark-surface'
            }`}
            onMouseEnter={() => setHoveredPlan('monthly')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <h3 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Monthly</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gold-600">$1</span>
              <span className="text-earth-600 dark:text-earth-300 ml-2">/month</span>
            </div>
            <button
              disabled
              className="w-full bg-earth-400 text-white font-semibold py-3 rounded-lg mb-4 cursor-not-allowed opacity-60"
            >
              Join Now
            </button>
            <p className="text-xs text-earth-500 dark:text-earth-400 text-center mb-6">Stripe integration coming soon</p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start text-earth-600 dark:text-earth-300">
                  <span className="text-gold-600 mr-3 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Annual Plan */}
          <div
            className={`border-2 rounded-lg p-8 transition relative ${
              hoveredPlan === 'annual'
                ? 'border-gold-400 bg-gold-50 shadow-lg'
                : 'border-earth-300 dark:border-earth-700 bg-white dark:bg-dark-surface'
            }`}
            onMouseEnter={() => setHoveredPlan('annual')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gold-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Save ~17%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-2">Annual</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gold-600">$10</span>
              <span className="text-earth-600 dark:text-earth-300 ml-2">/year</span>
            </div>
            <button
              disabled
              className="w-full bg-gold-600 text-white font-semibold py-3 rounded-lg mb-4 cursor-not-allowed opacity-60"
            >
              Join Now
            </button>
            <p className="text-xs text-earth-500 dark:text-earth-400 text-center mb-6">Stripe integration coming soon</p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start text-earth-600 dark:text-earth-300">
                  <span className="text-gold-600 mr-3 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cancellation Note */}
        <div className="max-w-2xl mx-auto bg-earth-100 dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-6 mb-8">
          <p className="text-earth-800 dark:text-dark-text text-center">
            <span className="font-semibold">Cancel anytime</span> — we'll throw you a party on your way out
          </p>
        </div>

        {/* Already a Member */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-earth-600 dark:text-earth-300 mb-4">Already a member?</p>
          <Link href="/membership/login" className="text-gold-600 hover:text-gold-700 font-semibold">
            Log in to your account →
          </Link>
        </div>
      </div>
    </div>
  );
}
