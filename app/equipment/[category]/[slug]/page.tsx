import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getProduct,
  getAllProductParams,
  categoryDisplayName,
  amazonLink,
} from "@/lib/equipment";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductParams();
}

/* ─── Sub-components ─────────────────────────────────────────────── */

function StarRating({ rating, size = "lg" }: { rating: number; size?: "sm" | "lg" }) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const cls   = size === "lg" ? "text-3xl" : "text-lg";
  return (
    <span className={`text-gold-500 ${cls}`} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

function AmazonButton({
  asin,
  label = "Buy on Amazon",
  className = "",
}: {
  asin: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={amazonLink(asin)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg transition-colors ${className}`}
    >
      {label} →
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default async function ProductReviewPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);

  if (!product) {
    notFound();
  }

  const catDisplay = categoryDisplayName(category);
  const publishDate = new Date(product.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-earth-50 dark:bg-dark-bg">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 dark:from-dark-bg dark:to-dark-surface text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/equipment/${category}`}
            className="text-earth-100 hover:text-white text-sm inline-flex items-center gap-1 mb-6"
          >
            ← Back to {catDisplay}
          </Link>

          {/* Category badge */}
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gold-600 text-white mb-4 capitalize">
            {catDisplay}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">
            {product.title}
          </h1>

          <p className="text-earth-200 text-sm mb-6">
            By <strong>{product.brand}</strong> &nbsp;·&nbsp; Published {publishDate}
          </p>

          {/* Rating + price + buy button row */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-xl font-bold">{product.rating}/5</span>
            </div>
            <div className="text-2xl font-bold text-gold-300">~${product.price}</div>
            {product.asin && (
              <AmazonButton asin={product.asin} label="Buy on Amazon" />
            )}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pros / Cons */}
            {(product.pros?.length > 0 || product.cons?.length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.pros?.length > 0 && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">
                      ✓ Pros
                    </h3>
                    <ul className="space-y-2">
                      {product.pros.map((pro, i) => (
                        <li
                          key={i}
                          className="text-sm text-green-900 dark:text-green-200 flex items-start gap-2"
                        >
                          <span className="mt-0.5 shrink-0">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.cons?.length > 0 && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">✗ Cons</h3>
                    <ul className="space-y-2">
                      {product.cons.map((con, i) => (
                        <li
                          key={i}
                          className="text-sm text-red-900 dark:text-red-200 flex items-start gap-2"
                        >
                          <span className="mt-0.5 shrink-0">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* MDX content */}
            <article className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-earth-200 dark:border-earth-700 p-8">
              <div className="prose prose-earth dark:prose-invert max-w-none prose-headings:text-earth-900 dark:prose-headings:text-dark-text prose-a:text-gold-600 hover:prose-a:text-gold-700 prose-strong:text-earth-900 dark:prose-strong:text-dark-text">
                <MDXRemote source={product.content} />
              </div>
            </article>

            {/* External Links — "What Others Are Saying" */}
            {product.externalLinks && product.externalLinks.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">
                  What Others Are Saying
                </h2>
                <div className="space-y-3">
                  {product.externalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg p-4 hover:shadow-md hover:border-gold-400 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-earth-800 dark:text-dark-text group-hover:text-gold-600 transition-colors">
                            {link.label}
                          </p>
                          <p className="text-sm text-earth-600 dark:text-earth-300 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <span className="text-gold-500 text-xl shrink-0">↗</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* YouTube Videos — "See It In Action" */}
            {product.youtubeVideos && product.youtubeVideos.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-earth-800 dark:text-dark-text mb-4">
                  See It In Action
                </h2>
                <div className="space-y-6">
                  {product.youtubeVideos.map((video, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-earth-200 dark:border-earth-700 overflow-hidden"
                    >
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${video.videoId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-earth-800 dark:text-dark-text">
                          {video.title}
                        </p>
                        <p className="text-sm text-earth-500 dark:text-earth-400">
                          {video.channelName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Affiliate disclaimer */}
            <div className="bg-earth-100 dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg p-4">
              <p className="text-xs text-earth-600 dark:text-earth-400">
                <strong>Affiliate Disclosure:</strong> This review contains Amazon affiliate links.
                Weekend Gold Miner earns a small commission on qualifying purchases at no extra cost
                to you. This never influences our ratings or recommendations.
              </p>
            </div>
          </div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside className="space-y-6">
            {/* Quick summary card */}
            <div className="bg-white dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="font-bold text-earth-800 dark:text-dark-text text-lg mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-earth-500 dark:text-earth-400">Brand</dt>
                  <dd className="font-semibold text-earth-800 dark:text-dark-text">{product.brand}</dd>
                </div>
                <div>
                  <dt className="text-earth-500 dark:text-earth-400">Rating</dt>
                  <dd className="flex items-center gap-2">
                    <StarRating rating={product.rating} size="sm" />
                    <span className="font-semibold text-earth-800 dark:text-dark-text">
                      {product.rating}/5
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-earth-500 dark:text-earth-400">Price</dt>
                  <dd className="font-bold text-gold-600 text-lg">~${product.price}</dd>
                </div>
                <div>
                  <dt className="text-earth-500 dark:text-earth-400">Category</dt>
                  <dd className="capitalize font-semibold text-earth-800 dark:text-dark-text">
                    {catDisplay}
                  </dd>
                </div>
              </dl>

              {product.asin && (
                <div className="mt-6">
                  <AmazonButton
                    asin={product.asin}
                    label="Buy on Amazon"
                    className="w-full text-center"
                  />
                  <p className="text-xs text-earth-500 dark:text-earth-400 text-center mt-2">
                    Affiliate link — supports this site
                  </p>
                </div>
              )}
            </div>

            {/* Price Comparison */}
            {(product.cheaperAlternative || product.pricierAlternative) && (
              <div className="bg-white dark:bg-dark-surface border border-earth-200 dark:border-earth-700 rounded-lg shadow-md p-6">
                <h3 className="font-bold text-earth-800 dark:text-dark-text text-lg mb-4">
                  Price Comparison
                </h3>
                <div className="space-y-4">
                  {/* Current product */}
                  <div className="flex items-center justify-between py-2 border-b border-earth-100 dark:border-earth-700">
                    <div>
                      <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide">
                        This Review
                      </p>
                      <p className="text-sm font-semibold text-earth-800 dark:text-dark-text">
                        {product.product}
                      </p>
                    </div>
                    <span className="font-bold text-earth-800 dark:text-dark-text">
                      ~${product.price}
                    </span>
                  </div>

                  {/* Cheaper alternative */}
                  {product.cheaperAlternative && (
                    <div className="py-2 border-b border-earth-100 dark:border-earth-700">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                          Budget Pick
                        </p>
                        <span className="font-bold text-green-700 dark:text-green-400">
                          ~${product.cheaperAlternative.price}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-earth-800 dark:text-dark-text mb-1">
                        {product.cheaperAlternative.name}
                      </p>
                      <p className="text-xs text-earth-600 dark:text-earth-400 mb-2">
                        {product.cheaperAlternative.reason}
                      </p>
                      {product.cheaperAlternative.asin && (
                        <a
                          href={amazonLink(product.cheaperAlternative.asin)}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="text-xs text-gold-600 hover:text-gold-700 font-semibold"
                        >
                          View on Amazon →
                        </a>
                      )}
                    </div>
                  )}

                  {/* Pricier alternative */}
                  {product.pricierAlternative && (
                    <div className="py-2">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          Premium Pick
                        </p>
                        <span className="font-bold text-blue-700 dark:text-blue-400">
                          ~${product.pricierAlternative.price}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-earth-800 dark:text-dark-text mb-1">
                        {product.pricierAlternative.name}
                      </p>
                      <p className="text-xs text-earth-600 dark:text-earth-400 mb-2">
                        {product.pricierAlternative.reason}
                      </p>
                      {product.pricierAlternative.asin && (
                        <a
                          href={amazonLink(product.pricierAlternative.asin)}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="text-xs text-gold-600 hover:text-gold-700 font-semibold"
                        >
                          View on Amazon →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href={`/equipment/${category}`}
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors"
          >
            ← Back to {catDisplay}
          </Link>
        </div>
      </div>
    </main>
  );
}
