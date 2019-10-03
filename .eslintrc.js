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
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "caughtErrors": "none" }],
    "semi": [1, "always"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
