/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        // Tinta verde-beltza: beltz hutsa baino leunagoa, kontraste handiarekin.
        tinta: '#17201D',
        // Testu sekundarioa: 7,6:1 zuriaren gainean.
        lauso: '#4A5652',
        marra: '#D9DFDB',
        leun: '#F2F5F3',
      },
      fontFamily: {
        // Braille Institutek irakurgarritasunerako diseinatua.
        sans: ['"Atkinson Hyperlegible Next"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        testua: '42rem',
      },
    },
  },
  plugins: [],
};
