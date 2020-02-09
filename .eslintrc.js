module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": "off",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "caughtErrors": "none", "ignoreRestSiblings": true }],
    "semi": [1, "always"],
    "space-before-function-paren": ["error", "never"],
    "object-curly-spacing": ["error", "never"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
