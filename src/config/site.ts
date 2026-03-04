/**
 * src/config/site.ts — Single source of truth for all site-wide data.
 *
 * Update values here; every component and page that imports from this
 * file will reflect changes automatically — no hunting through templates.
 *
 * WHAT LIVES HERE
 * ───────────────
 * · Site identity  (name, URL, descriptions)
 * · Contact info   (email, address, social)
 * · Navigation     (header nav + footer link groups)
 *
 * WHAT DOES NOT LIVE HERE
 * ────────────────────────
 * · Page-specific content (that stays in each page or content collection)
 * · Sponsor data          (src/content/sponsors.ts — needs image imports)
 */

// ── Site identity ─────────────────────────────────────────────────────────────

export const SITE = {
  name:               'TCHS Aero',
  url:                'https://tchsaero.org',
  defaultTitle:       'TCHS Aero — Temple City High School Aeronautics',
  defaultDescription: "TCHS Aero is Temple City High School's competitive aeronautics and drone engineering club. We build, fly, and compete.",
  /** Short tagline used in footer and JSON-LD */
  tagline:            "Temple City High School's competitive aeronautics and drone engineering club — pushing the boundaries of student innovation.",
  /** Terse description used in JSON-LD Organization schema */
  schemaDescription:  "Temple City High School's competitive aeronautics and drone engineering club.",
  logoPath:           '/uploads/aero-logo.svg',
} as const;

// ── Contact ───────────────────────────────────────────────────────────────────

export const CONTACT = {
  email:           'tchsaero@tcusd.net',
  instagramUrl:    'https://www.instagram.com/tchs.aero/',
  instagramHandle: '@tchs.aero',
  address: {
    street:   '9501 Lemon Ave',
    city:     'Temple City',
    state:    'CA',
    zip:      '91780',
    country:  'US',
    /** Pre-formatted single-line version for footer / JSON-LD */
    oneLine:  '9501 Lemon Ave, Temple City, CA 91780',
  },
} as const;

// ── Navigation ────────────────────────────────────────────────────────────────

/** Primary nav links — used in both Header and Footer. */
export const NAV_ITEMS = [
  { text: 'Home',    href: '/'         },
  { text: 'About',   href: '/about-us' },
  { text: 'News',    href: '/news'     },
  { text: 'Contact', href: '/contact'  },
] as const;

/** Footer link columns — derived from NAV_ITEMS + extras. */
export const FOOTER_GROUPS = [
  {
    title: 'Navigate',
    links: [
      { text: 'Home',    href: '/'         },
      { text: 'About',   href: '/about-us' },
      { text: 'News',    href: '/news'     },
    ],
  },
  {
    title: 'Connect',
    links: [
      { text: 'Contact',    href: '/contact' },
      { text: 'Sponsor Us', href: '/sponsor' },
    ],
  },
] as const;
