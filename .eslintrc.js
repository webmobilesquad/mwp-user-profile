module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/no-unused-state': 'off',
    'import/prefer-default-export': 'off',
  },
};
