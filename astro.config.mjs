import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
integrations: [sitemap()];

export default defineConfig({
  site: 'https://7ba3c18b-restaurant-showcase.patrikrestaurant.workers.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});