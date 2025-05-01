// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://marats-first-astro-site.netlify.app/",
  integrations: [preact()]
});