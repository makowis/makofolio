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
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/subpackages'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/__mocks__/*.js', '**/*.test.js'] },
    ],
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off', // conflict prettier
  },
};
