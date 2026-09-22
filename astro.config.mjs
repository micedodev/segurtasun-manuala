import { defineConfig } from 'astro/config';

export default defineConfig({
  // Necesario para canonical, hreflang y sitemap. Cámbialo al dominio
  // definitivo cuando publiques.
  site: 'https://segurtasunmanuala.vercel.app',
  output: 'static',
  devToolbar: { enabled: false },
  // Tailwind va por PostCSS directo (postcss.config.cjs): la integración
  // @astrojs/tailwind no declara soporte de Astro 7 y rompía el install en Vercel.
  integrations: [],
  i18n: undefined,
  build: { inlineStylesheets: 'auto' },
});
