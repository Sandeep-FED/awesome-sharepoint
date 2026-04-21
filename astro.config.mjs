// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://Sandeep-FED.github.io",
  base: "/awesome-sharepoint",
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
})
