module.exports = {
  darkMode: 'class', // yoki 'media'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // mavjud fayllaringizni ham qo'shganingizga ishonch hosil qiling
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}
