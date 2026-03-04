/**
 * sponsors.ts — Single source of truth for all sponsor data.
 *
 * To add or update a sponsor:
 *   1. Drop the logo into src/assets/uploads/sponsor/ (PNG or JPEG)
 *   2. Import it below and add an entry to the array
 *   3. Astro will automatically generate an optimised WebP on build
 *   4. Both index.astro and sponsor.astro update automatically
 *
 * Leave `href` as an empty string or omit it to render the logo without a link.
 */

import type { ImageMetadata } from 'astro';
import tcsfLogo  from '../assets/uploads/sponsor/tcsf-logo-transparent.png';
import frskyLogo from '../assets/uploads/sponsor/frsky.png';
import hitecLogo from '../assets/uploads/sponsor/hitec.png';

export interface Sponsor {
  /** Imported image — Astro optimises to WebP at build time. */
  src:   ImageMetadata;
  alt:   string;
  /** External URL — omit or leave empty to render without a link. */
  href?: string;
}

export const sponsors: Sponsor[] = [
  {
    src:  tcsfLogo,
    alt:  'Temple City Schools Foundation',
    href: 'https://www.tcsf4students.org/',
  },
  {
    src:  frskyLogo,
    alt:  'FrSky',
    href: 'https://www.frsky-rc.com/',
  },
  {
    src:  hitecLogo,
    alt:  'Hitec',
    href: 'https://hitecrcd.com/',
  },
];
