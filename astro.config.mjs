// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tchsaero.org',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // eliminate render-blocking requests
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // inline assets < 4KB as data URIs
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // default quality governs all images unless overridden by
        // individual <Image> components (SponsorLogo already does).
        quality: 90,
      },
    },
  },
});
