import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://saandys.github.io', // Tu URL base
  base: '/zapateria-landing/', // Esto es importante, ya que indica que estás sirviendo desde /zapateria-landing/docs
  integrations: [react(), tailwind()],

});