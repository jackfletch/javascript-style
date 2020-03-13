module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-jackfletch-base',
    './overwrites',
  ].map(require.resolve),
  rules: {},
};
