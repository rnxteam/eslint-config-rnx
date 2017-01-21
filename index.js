module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {
    'react/require-extension': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/prefer-stateless-function': 0,
    'no-lonely-if': 0,
  },
};
