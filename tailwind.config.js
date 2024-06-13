/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 12px 4px #2271D1 inset'
      },
      backgroundImage: {
        banner: "url('/img/banner.jpg')"
      }
    }
  },
  plugins: []
}
