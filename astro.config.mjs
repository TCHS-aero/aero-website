// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tchsaero.org',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto', // inline small CSS to reduce requests
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // inline assets < 4KB as data URIs
    },
  },
});
