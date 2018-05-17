// @flow
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  settings: {
    react: {
      version: '16.1',
      flowVersion: '0.70',
    },
  },
  rules: {
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
