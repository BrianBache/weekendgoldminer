import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

export interface GuideFrontmatter {
  title: string;
  description: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  date: string;
  order: number;
  affiliateDisclaimer: boolean;
}

export interface GuideEntry {
  slug: string;
  frontmatter: GuideFrontmatter;
}

export interface GuideWithContent extends GuideEntry {
  content: string;
}

/** Return all guide slugs (filenames without .mdx) */
export async function getAllGuideSlugs(): Promise<string[]> {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/** Return all guides with frontmatter — used by the listing page */
export async function getAllGuides(): Promise<GuideEntry[]> {
  const slugs = await getAllGuideSlugs();
  const guides = slugs.map((slug) => {
    const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(raw);
    return {
      slug,
      frontmatter: data as GuideFrontmatter,
    };
  });
  return guides.sort((a, b) => (a.frontmatter.order ?? 999) - (b.frontmatter.order ?? 999));
}

/** Return a single guide with frontmatter + MDX content — used by [slug] page */
export async function getGuideBySlug(slug: string): Promise<GuideWithContent | null> {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as GuideFrontmatter,
    content,
  };
}
