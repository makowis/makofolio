module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
