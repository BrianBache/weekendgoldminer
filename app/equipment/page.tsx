import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CategoryImageCard from "@/components/CategoryImageCard";
import { getAllProducts, amazonLink } from "@/lib/equipment";
import type { ProductReview } from "@/lib/equipment";

const CATEGORIES = [
  { name: "Hand Panning",                slug: "panning",        image: "/images/equipment/categories/hand-panning.png" },
  { name: "Sluicing",                    slug: "sluicing",       image: "/images/equipment/categories/sluicing.png" },
  { name: "Highbankers & Power Sluices", slug: "highbankers",    image: "/images/equipment/categories/highbankers.png" },
  { name: "Metal Detecting",             slug: "detectors",      image: "/images/equipment/categories/metal-detecting.png" },
  { name: "Concentrators & Cleanup",     slug: "concentrators",  image: "/images/equipment/categories/concentrators.png" },
  { name: "Digging & Recovery",          slug: "digging",        image: "/images/equipment/categories/digging-recovery.png" },
  { name: "Field Gear",                  slug: "field-gear",     image: "/images/equipment/categories/field-gear.png" },
];

function StarRating({ rating }: { rating: number }) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="text-gold-500 text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

function ReviewCard({ review }: { review: ProductReview }) {
  return (
    <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden border-l-4 border-gold-600 flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-earth-100 dark:bg-earth-800 text-earth-700 dark:text-earth-200 mb-3 self-start capitalize">
          {review.category}
        </span>

        <h3 className="text-lg font-bold text-earth-800 dark:text-dark-text mb-1 leading-tight">
          {review.product}
        </h3>

        {/* Rating + price row */}
        <div className="flex items-center gap-3 mb-3">
          <StarRating rating={review.rating} />
          <span className="text-sm text-earth-500 dark:text-earth-400">{review.rating}/5</span>
          <span className="ml-auto text-gold-700 dark:text-gold-400 font-bold text-sm">
            ~${review.price}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-earth-600 dark:text-earth-300 flex-1 mb-4">
          {review.summary}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Link
            href={`/equipment/${review.category}/${review.slug}`}
            className="flex-1 text-center bg-earth-800 hover:bg-earth-900 dark:bg-gold-700 dark:hover:bg-gold-600 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
          >
            Read Review →
          </Link>
          {review.asin && (
            <a
              href={amazonLink(review.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
            >
              View on Amazon
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EquipmentPage() {
  const reviews = getAllProducts();

  return (
    <div className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      <PageHeader
        title="Equipment & Reviews"
        subtitle="Find the best gold prospecting equipment — tested and reviewed by weekend miners"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 dark:text-dark-text mb-8">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryImageCard
                key={cat.slug}
                name={cat.name}
                slug={cat.slug}
                image={cat.image}
              />
            ))}
          </div>
        </section>

        {/* Latest Reviews — only shown when MDX files exist */}
        {reviews.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-earth-800 dark:text-dark-text mb-8">
              Latest Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <ReviewCard key={`${r.category}/${r.slug}`} review={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
