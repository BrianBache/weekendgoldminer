'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-earth-800 dark:bg-dark-bg py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/membership" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Membership
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Member Login</h1>
          <p className="text-earth-200">Access your account</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-earth-800 dark:text-dark-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border-2 border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:border-gold-400 text-earth-800 dark:text-dark-text bg-white dark:bg-dark-surface"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-earth-800 dark:text-dark-text mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border-2 border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:border-gold-400 text-earth-800 dark:text-dark-text bg-white dark:bg-dark-surface"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled
              className="w-full bg-earth-400 text-white font-semibold py-3 rounded-lg cursor-not-allowed opacity-60"
            >
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <Link href="#" className="text-gold-600 hover:text-gold-700 font-semibold text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Coming Soon Note */}
          <div className="mt-8 p-4 bg-gold-50 border-l-4 border-gold-400 rounded">
            <p className="text-sm text-earth-800 dark:text-dark-text">
              <span className="font-semibold">Authentication system coming soon.</span> Login functionality will be available once our backend is ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
