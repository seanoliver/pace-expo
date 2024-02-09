module.exports = {
  root: true,
  extends: [
    'universe/native',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off', // If using TypeScript, you might want to turn this off
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true, jsxSingleQuote: true },
    ], // Ensures code format consistency
    // add your custom rules here
  },
}
