'use client';

import { useState } from 'react';

export default function GoldValueTool() {
  const [formData, setFormData] = useState({
    location: '',
    goldForm: 'dust',
    weight: '',
    unit: 'grams',
    purity: '14K',
    buyerType: 'refiner',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 dark:from-dark-bg dark:to-dark-surface text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Gold Value Estimator</h1>
          <p className="text-earth-100">
            Get an estimate of your gold's value based on purity, weight, and buyer type.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-6">Enter Your Gold Details</h2>

              {/* Location */}
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="e.g., California, Colorado, Oregon"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                />
              </div>

              {/* Gold Form */}
              <div className="mb-6">
                <label htmlFor="goldForm" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                  Gold Form
                </label>
                <select
                  id="goldForm"
                  name="goldForm"
                  value={formData.goldForm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                >
                  <option value="dust">Gold Dust</option>
                  <option value="flakes">Gold Flakes</option>
                  <option value="nuggets">Gold Nuggets</option>
                  <option value="jewelry">Jewelry</option>
                </select>
              </div>

              {/* Weight */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                    Weight
                  </label>
                  <input
                    id="weight"
                    type="number"
                    name="weight"
                    placeholder="0.00"
                    value={formData.weight}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                  />
                </div>
                <div>
                  <label htmlFor="unit" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                    Unit
                  </label>
                  <select
                    id="unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                  >
                    <option value="grams">Grams</option>
                    <option value="troy-oz">Troy Ounces</option>
                    <option value="pennyweight">Pennyweight</option>
                  </select>
                </div>
              </div>

              {/* Purity */}
              <div className="mb-6">
                <label htmlFor="purity" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                  Purity
                </label>
                <select
                  id="purity"
                  name="purity"
                  value={formData.purity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                >
                  <option value="10K">10K (41.7%)</option>
                  <option value="14K">14K (58.3%)</option>
                  <option value="18K">18K (75%)</option>
                  <option value="22K">22K (91.7%)</option>
                  <option value="24K">24K (99.9%)</option>
                  <option value="raw">Raw/Unknown</option>
                </select>
              </div>

              {/* Buyer Type */}
              <div className="mb-8">
                <label htmlFor="buyerType" className="block text-sm font-semibold text-earth-700 dark:text-earth-300 mb-2">
                  Buyer Type
                </label>
                <select
                  id="buyerType"
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 dark:border-earth-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white dark:bg-dark-surface text-earth-800 dark:text-dark-text"
                >
                  <option value="refiner">Refiner</option>
                  <option value="jeweler">Jeweler</option>
                  <option value="pawn-shop">Pawn Shop</option>
                  <option value="private">Private Buyer</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                type="button"
                disabled
                className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg cursor-not-allowed opacity-60"
              >
                Coming Soon
              </button>
              <p className="text-center text-earth-600 dark:text-earth-300 text-sm mt-3">
                Calculation feature launching soon
              </p>
            </form>
          </div>

          {/* Results Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-8 sticky top-6">
              <h3 className="text-xl font-bold text-earth-800 dark:text-dark-text mb-4">Estimated Value</h3>
              <div className="bg-earth-50 dark:bg-dark-bg rounded-lg p-6 mb-4">
                <p className="text-earth-600 dark:text-earth-300 text-sm mb-2">Fill out the form to see results</p>
                <p className="text-3xl font-bold text-gold-600">--</p>
                <p className="text-sm text-earth-500 dark:text-earth-400 mt-2">USD</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-earth-50 dark:bg-dark-bg p-3 rounded">
                  <p className="text-earth-600 dark:text-earth-300">Spot Price</p>
                  <p className="font-semibold text-earth-800 dark:text-dark-text">--</p>
                </div>
                <div className="bg-earth-50 dark:bg-dark-bg p-3 rounded">
                  <p className="text-earth-600 dark:text-earth-300">Buyer Markup</p>
                  <p className="font-semibold text-earth-800 dark:text-dark-text">-- %</p>
                </div>
                <div className="bg-earth-50 dark:bg-dark-bg p-3 rounded">
                  <p className="text-earth-600 dark:text-earth-300">Final Payout</p>
                  <p className="font-semibold text-earth-800 dark:text-dark-text">--</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
