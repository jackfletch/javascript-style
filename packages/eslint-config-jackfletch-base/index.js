module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './overwrites',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
