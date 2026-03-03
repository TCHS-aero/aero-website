/**
 * sponsors.ts — Single source of truth for all sponsor data.
 *
 * To add or update a sponsor:
 *   1. Drop the logo into /public/uploads/sponsor/ (WebP + PNG fallback)
 *   2. Add an entry to this array
 *   3. Both index.astro and sponsor.astro will update automatically.
 *
 * Leave `href` as an empty string or omit it to render the logo without a link.
 */

export interface Sponsor {
  src:      string;   // WebP path (preferred)
  fallback: string;   // PNG fallback for older browsers
  alt:      string;   // Descriptive alt text
  href?:    string;   // External URL — leave empty to skip the link wrapper
}

export const sponsors: Sponsor[] = [
  {
    src:      '/uploads/sponsor/tcsf-logo-transparent.webp',
    fallback: '/uploads/sponsor/tcsf-logo-transparent.png',
    alt:      'Temple City Schools Foundation',
    href:     'https://www.tcsf4students.org/',
  },
  {
    src:      '/uploads/sponsor/frsky.webp',
    fallback: '/uploads/sponsor/frsky.png',
    alt:      'FrSky',
    href:     'https://www.frsky-rc.com/',
  },
  {
    src:      '/uploads/sponsor/hitec.webp',
    fallback: '/uploads/sponsor/hitec.png',
    alt:      'Hitec',
    href:     'https://hitecrcd.com/',
  },
];