module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'tailwindcss': {},
    'postcss-custom-media': {},
    'postcss-preset-env': {
      stage: 1,
      features: { 
        'nesting-rules': false,
        'custom-selectors': { preserve: true }
      },
      env: 'development',
    },
    'postcss-jit-props': 'openProps',
    'autoprefixer': {},
  }
}