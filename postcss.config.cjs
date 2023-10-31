
module.exports = {
  plugins: [
    require('postcss-import'),
    reqquire('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-custom-media'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'custom-selectors': { preserve: true }
      },
      env: 'development',
    }),
    require('postcss-jit-props')(openProps),
  ]
}
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }