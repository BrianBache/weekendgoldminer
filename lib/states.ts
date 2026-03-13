import fs from 'fs';
import path from 'path';

const STATES_DIR = path.join(process.cwd(), 'content', 'states');

export interface StateLocation {
  name: string;
  county?: string;
  location?: string;
  description: string;
  goldType?: string;
  landManagement?: string;
  permitRequired?: boolean;
  permitNotes?: string;
  accessModel?: string;
  estimatedCost?: string;
  url: string;
  urlLabel?: string;
  notes?: string;
}

export interface StateResource {
  name: string;
  description: string;
  url: string;
}

export interface StateData {
  state: string;
  displayName: string;
  lastResearched: string;
  regulationSummary: {
    overview: string;
    keyRules: string[];
    hpaRequired?: boolean;
    hpaInfo?: string;
    suctionDredgeStatus?: string;
    handPanning?: string;
    disclaimer: string;
  };
  publicLocations: StateLocation[];
  privateLocations: StateLocation[];
  blmResources: StateResource[];
  dnrResources: StateResource[];
}

/**
 * Normalize raw JSON (written by Scott) to match the StateData interface.
 * Handles field name mismatches:
 *   - privateOptions → privateLocations
 *   - officialResources[{ title, url, description }] → blmResources / dnrResources
 */
function normalizeStateData(raw: any): StateData {
  // Handle privateOptions → privateLocations
  const privateLocations: StateLocation[] = raw.privateLocations ?? raw.privateOptions ?? [];

  // Seed from existing typed fields (already correct shape)
  const blmResources: StateResource[] = [];
  const dnrResources: StateResource[] = [];

  (raw.blmResources ?? []).forEach((r: any) =>
    blmResources.push({ name: r.name ?? r.title ?? 'Resource', description: r.description ?? '', url: r.url ?? '' })
  );
  (raw.dnrResources ?? []).forEach((r: any) =>
    dnrResources.push({ name: r.name ?? r.title ?? 'Resource', description: r.description ?? '', url: r.url ?? '' })
  );

  // Split officialResources into blmResources (federal) vs dnrResources (state) by keyword
  const officialResources: any[] = raw.officialResources ?? [];
  officialResources.forEach((r: any) => {
    const name = r.name ?? r.title ?? 'Resource';
    const entry: StateResource = { name, description: r.description ?? '', url: r.url ?? '' };
    const nameLower = name.toLowerCase();
    if (
      nameLower.includes('blm') ||
      nameLower.includes('bureau of land') ||
      nameLower.includes('usgs') ||
      nameLower.includes('federal') ||
      nameLower.includes('national forest') ||
      nameLower.includes('usfs')
    ) {
      blmResources.push(entry);
    } else {
      dnrResources.push(entry);
    }
  });

  return {
    ...raw,
    privateLocations,
    blmResources,
    dnrResources,
  };
}

/**
 * Return state data for a given slug (e.g. "washington"), or null if no JSON
 * file exists yet for that state.
 */
export async function getStateData(slug: string): Promise<StateData | null> {
  const filePath = path.join(STATES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return normalizeStateData(parsed);
  } catch {
    return null;
  }
}

/** Return slugs for all states that have a JSON file */
export async function getAllStatesSlugs(): Promise<string[]> {
  if (!fs.existsSync(STATES_DIR)) return [];
  return fs
    .readdirSync(STATES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}
