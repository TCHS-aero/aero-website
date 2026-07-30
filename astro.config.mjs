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
      assetsInlineLimit: 4096,
    },
    optimizeDeps: {
      exclude: ['@pagefind/default-ui'],
    },
    ssr: {
      noExternal: [],
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 72,
      },
    },
  },
});
