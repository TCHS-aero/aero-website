/**
 * sponsors.ts — Single source of truth for all sponsor data.
 *
 * To add or update a sponsor:
 *   1. Drop the logo into src/assets/uploads/sponsor/ (PNG or JPEG)
 *   2. Import it below and add an entry to the array
 *   3. Astro will automatically generate an optimised WebP on build
 *   4. Both index.astro and sponsor.astro update automatically
 *
 * Tiers (ascending):
 *   'propeller'  → $50+
 *   'jet-engine' → $100+
 *   'orbiter'    → $200+
 *
 * Leave `href` as an empty string or omit it to render the logo without a link.
 */

import type { ImageMetadata } from 'astro';
import tcsfLogo  from '../assets/uploads/sponsor/tcsf-logo-transparent.png';
import frskyLogo from '../assets/uploads/sponsor/frsky.png';
import hitecLogo from '../assets/uploads/sponsor/hitec.png';

export type SponsorTier = 'propeller' | 'jet-engine' | 'orbiter';

export interface Sponsor {
  src:   ImageMetadata;
  alt:   string;
  href?: string;
  tier:  SponsorTier;
}

export const sponsors: Sponsor[] = [
  {
    src:  tcsfLogo,
    alt:  'Temple City Schools Foundation',
    href: 'https://www.tcsf4students.org/',
    tier: 'orbiter',
  },
  {
    src:  frskyLogo,
    alt:  'FrSky',
    href: 'https://www.frsky-rc.com/',
    tier: 'orbiter',
  },
  {
    src:  hitecLogo,
    alt:  'Hitec',
    href: 'https://hitecrcd.com/',
    tier: 'orbiter',
  },
];

// ── Tier-filtered lists ───────────────────────────────────────────────────────
export const orbiterSponsors   = sponsors.filter(s => s.tier === 'orbiter');
export const jetEngineSponsors = sponsors.filter(s => s.tier === 'jet-engine');
export const propellerSponsors = sponsors.filter(s => s.tier === 'propeller');
