import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductsByCategory,
  getAllCategorySlugs,
  amazonLink,
} from "@/lib/equipment";
import type { ProductReview } from "@/lib/equipment";

/** Slug → display name for all equipment categories */
const CATEGORY_NAMES: Record<string, string> = {
  panning:        "Hand Panning",
  sluicing:       "Sluicing",
  highbankers:    "Highbankers & Power Sluices",
  detectors:      "Metal Detecting",
  concentrators:  "Concentrators & Cleanup",
  digging:        "Digging & Recovery",
  "field-gear":   "Field Gear",
};

const VALID_CATEGORIES = Object.keys(CATEGORY_NAMES);

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  // Merge known categories with any that have actual MDX files
  const all = Array.from(new Set([...VALID_CATEGORIES, ...slugs]));
  return all.map((category) => ({ category }));
}

function StarRating({ rating }: { rating: number }) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="text-gold-500" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

function ProductCard({ product }: { product: ProductReview }) {
  return (
    <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden border-t-4 border-gold-600 hover:shadow-lg transition-shadow flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        {/* Brand */}
        <p className="text-xs font-semibold text-earth-500 dark:text-earth-400 uppercase tracking-wide mb-1">
          {product.brand}
        </p>

        {/* Product name */}
        <h3 className="text-lg font-bold text-earth-800 dark:text-dark-text mb-2 leading-tight">
          {product.product}
        </h3>

        {/* Rating + price */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-sm text-earth-500 dark:text-earth-400 ml-1">
            {product.rating}/5
          </span>
          <span className="ml-auto text-gold-700 dark:text-gold-400 font-bold">
            ~${product.price}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-earth-600 dark:text-earth-300 mb-4 flex-1">
          {product.summary}
        </p>

        {/* Top 2 pros */}
        {product.pros?.length > 0 && (
          <ul className="mb-4 space-y-1">
            {product.pros.slice(0, 2).map((pro, i) => (
              <li key={i} className="text-sm text-earth-700 dark:text-earth-300 flex items-start gap-1">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Link
            href={`/equipment/${product.category}/${product.slug}`}
            className="flex-1 flex items-center justify-center text-center bg-earth-800 hover:bg-earth-900 dark:bg-earth-700 dark:hover:bg-earth-600 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
          >
            Read Review →
          </Link>
          {product.asin && (
            <a
              href={amazonLink(product.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
            >
              Check Amazon price
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function EquipmentCategoryPage({ params }: PageProps) {
  const { category } = await params;

  // 404 for completely unknown slugs
  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }

  const displayName = CATEGORY_NAMES[category] ?? category;
  const products    = getProductsByCategory(category);

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 dark:from-dark-bg dark:to-dark-surface text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/equipment"
            className="text-earth-100 hover:text-white mb-4 inline-flex items-center gap-1 text-sm"
          >
            ← Back to Equipment
          </Link>
          <h1 className="text-4xl font-bold mt-2 mb-2">{displayName}</h1>
          <p className="text-earth-100">
            Browse and compare {displayName.toLowerCase()} equipment for gold prospecting
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length === 0 ? (
          /* Empty state */
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-10 text-center border border-earth-200 dark:border-earth-700">
            <div className="text-6xl mb-4">⛏️</div>
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-3">
              Reviews Coming Soon
            </h2>
            <p className="text-earth-600 dark:text-earth-300 mb-6">
              We're researching the best {displayName.toLowerCase()} equipment. Check back soon for
              in-depth reviews.
            </p>
            <Link
              href="/equipment"
              className="inline-block bg-earth-800 hover:bg-earth-900 text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              Browse Other Categories
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-8">
              {products.length} Review{products.length !== 1 ? "s" : ""} in {displayName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        )}

        {/* Affiliate disclaimer */}
        <div className="mt-12 bg-earth-100 dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg p-4">
          <p className="text-xs text-earth-600 dark:text-earth-400">
            <strong>Affiliate Disclosure:</strong> Weekend Gold Miner is a participant in the Amazon
            Services LLC Associates Program. We earn a small commission on qualifying purchases at no
            extra cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}
