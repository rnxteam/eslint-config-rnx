module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "class-methods-use-this": 0,
  }
};
