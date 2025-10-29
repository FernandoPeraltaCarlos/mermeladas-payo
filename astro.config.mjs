// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://reposteria-payo.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});