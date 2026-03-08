'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-earth-800 dark:bg-dark-bg py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gold-400 mb-2">About WeekendGoldMiner</h1>
          <p className="text-earth-200">Learn more about our mission</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mission Statement */}
        <section className="mb-12 bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">Our Mission</h2>
          <p className="text-earth-600 dark:text-earth-300 leading-relaxed mb-4">
            WeekendGoldMiner.com is dedicated to helping weekend prospectors and small-scale miners find success in their gold mining adventures. We provide resources, guides, and community support for everyone from casual hobbyists to serious small business operators.
          </p>
          <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
            Our goal is to make professional mining knowledge accessible and affordable to everyone interested in pursuing this rewarding activity. We believe that with the right information and tools, anyone can become a successful gold miner.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-6">Get in Touch</h2>
          <div className="bg-white dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-earth-800 dark:text-dark-text mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Prospector"
                  className="w-full px-4 py-2 border-2 border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:border-gold-400 text-earth-800 dark:text-dark-text bg-white dark:bg-dark-surface"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-earth-800 dark:text-dark-text mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border-2 border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:border-gold-400 text-earth-800 dark:text-dark-text bg-white dark:bg-dark-surface"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-earth-800 dark:text-dark-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you think..."
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:border-gold-400 text-earth-800 dark:text-dark-text bg-white dark:bg-dark-surface resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled
                className="w-full bg-earth-400 text-white font-semibold py-3 rounded-lg cursor-not-allowed opacity-60"
              >
                Send Message
              </button>

              {/* Coming Soon Note */}
              <div className="p-4 bg-gold-50 dark:bg-dark-surface border-l-4 border-gold-400 rounded">
                <p className="text-sm text-earth-800 dark:text-dark-text">
                  <span className="font-semibold">No backend yet.</span> Contact form submission will be available once our backend infrastructure is in place.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section className="bg-earth-100 dark:bg-dark-surface border-2 border-earth-300 dark:border-earth-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">Legal Disclaimer</h2>
          <p className="text-earth-700 dark:text-earth-300 leading-relaxed whitespace-pre-wrap">
            The information provided on WeekendGoldMiner.com is for informational purposes only and does not
            constitute legal advice. Always verify regulations with local, state, and federal authorities before
            prospecting. Laws and regulations change frequently.
          </p>
        </section>
      </div>
    </div>
  );
}
