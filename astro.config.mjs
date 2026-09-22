import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Necesario para canonical, hreflang y sitemap. Cámbialo al dominio
  // definitivo cuando publiques.
  site: 'https://segurtasunmanuala.vercel.app',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: undefined,
  build: { inlineStylesheets: 'auto' },
});
