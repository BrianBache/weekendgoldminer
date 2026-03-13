import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const EQUIPMENT_DIR = path.join(process.cwd(), 'content', 'equipment');

export interface ProductReview {
  slug: string;
  category: string;
  title: string;
  product: string;
  brand: string;
  asin?: string;
  price: number;
  rating: number;
  pros: string[];
  cons: string[];
  publishedAt: string;
  updatedAt: string;
  summary: string;
  externalLinks?: { label: string; url: string; description: string }[];
  youtubeVideos?: { title: string; videoId: string; channelName: string }[];
  cheaperAlternative?: { name: string; asin?: string; price: number; reason: string };
  pricierAlternative?: { name: string; asin?: string; price: number; reason: string };
  coverImage?: string;
}

export interface ProductReviewWithContent extends ProductReview {
  content: string;
}

/** Return all category slugs that have at least one MDX file */
export function getAllCategorySlugs(): string[] {
  if (!fs.existsSync(EQUIPMENT_DIR)) return [];
  return fs
    .readdirSync(EQUIPMENT_DIR)
    .filter((f) => fs.statSync(path.join(EQUIPMENT_DIR, f)).isDirectory());
}

/** Return all products in a given category, sorted by publishedAt descending */
export function getProductsByCategory(category: string): ProductReview[] {
  const categoryDir = path.join(EQUIPMENT_DIR, category);
  if (!fs.existsSync(categoryDir)) return [];
  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(categoryDir, file), 'utf8');
      const { data } = matter(raw);
      return { ...data, slug, category } as ProductReview;
    })
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
}

/** Return a single product with content */
export function getProduct(
  category: string,
  slug: string
): ProductReviewWithContent | null {
  const filePath = path.join(EQUIPMENT_DIR, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { ...data, slug, category, content } as ProductReviewWithContent;
}

/** Return every product across all categories, sorted by publishedAt descending */
export function getAllProducts(): ProductReview[] {
  const categories = getAllCategorySlugs();
  const all = categories.flatMap((cat) => getProductsByCategory(cat));
  return all.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
}

/** Generate static params: [{category, slug}] — used in generateStaticParams */
export function getAllProductParams(): { category: string; slug: string }[] {
  const categories = getAllCategorySlugs();
  return categories.flatMap((cat) =>
    getProductsByCategory(cat).map((p) => ({ category: cat, slug: p.slug }))
  );
}

/** Capitalise a slug for display: "gold-pans" → "Gold Pans" */
export function categoryDisplayName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Build an Amazon affiliate link */
export function amazonLink(asin: string, tag = 'weekendgoldminer-20'): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}
