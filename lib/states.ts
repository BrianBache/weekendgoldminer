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
 * Return state data for a given slug (e.g. "washington"), or null if no JSON
 * file exists yet for that state.
 */
export async function getStateData(slug: string): Promise<StateData | null> {
  const filePath = path.join(STATES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw) as StateData;
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
