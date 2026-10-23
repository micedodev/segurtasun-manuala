/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        // Lehengo webguneko paleta: ikatza, hezurra eta gorria.
        carbon: {
          950: '#0B0B0C',
          900: '#0E0E10',
          850: '#141417',
          800: '#1A1A1E',
        },
        // Testu nagusia: 16:1 ikatzaren gainean.
        hueso: '#ECE9E2',
        // Testu sekundarioa: 7,4:1 ikatzaren gainean.
        piedra: '#A3A09A',
        humo: '#6E6C68',
        linea: '#2A2A2F',
        panel: '#141417',
        rojo: '#D94848',
        rojovivo: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        testua: '42rem',
      },
    },
  },
  plugins: [],
};
