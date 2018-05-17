/* eslint-disable global-require */
/* eslint-disable flowtype/require-valid-file-annotation */ // ここだけうまく解決できず

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
