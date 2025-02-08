import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  buildOptions: {
    site: 'https://saandys.github.io/zapateria-landing',
  },
});