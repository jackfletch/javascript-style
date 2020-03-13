module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './overrides',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
