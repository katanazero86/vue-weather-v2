module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'no-unused-vars': [
      'error',
      {
        'vars': 'local',
        'args': 'after-used',
        'caughtErrors': 'none',
        'ignoreRestSiblings': true
      },
    ],
    'semi': [1, 'always'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'no-trailing-spaces': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
