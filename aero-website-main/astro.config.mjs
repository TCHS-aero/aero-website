// astro.config.mjs
// ─────────────────
// Astro's built-in image optimisation (astro:assets) uses Sharp to generate
// WebP variants at build time for any image imported from src/.
//
// DEPENDENCIES (run once after cloning):
//   npm install --save-dev sharp
//   npm install @astrojs/sitemap
//
// The sitemap integration auto-generates /sitemap-index.xml on build,
// which is referenced in public/robots.txt.

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tchsaero.org',

  integrations: [
    sitemap(),
  ],

  image: {
    // Sharp is Astro's default image service; explicit for clarity.
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
