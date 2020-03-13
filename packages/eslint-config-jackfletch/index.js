module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-jackfletch-base',
    './overrides',
  ].map(require.resolve),
  rules: {},
};
