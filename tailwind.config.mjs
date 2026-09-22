/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#0B0B0C',
          900: '#101013',
          850: '#141417',
          800: '#1A1A1E',
          700: '#232329',
        },
        hueso: '#ECE9E2',
        niebla: '#D8D4CB',
        nieblaos: '#CFC9BB',
        espresso: '#2E2A26',
        piedra: '#A3A09A',
        humo: '#6E6C68',
        rojo: '#D94848',
        rojovivo: '#FF6B6B',
      },
      fontFamily: {
        display: ['Roboto', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
  // La integración @astrojs/tailwind usaba applyBaseStyles:false (sin preflight).
  // Al ir por PostCSS directo se conserva el mismo render desactivándolo aquí.
  corePlugins: { preflight: false },
};
