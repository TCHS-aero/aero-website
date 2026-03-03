// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tchsaero.org',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // inline all CSS to eliminate render-blocking requests
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // inline assets < 4KB as data URIs
    },
  },
});
