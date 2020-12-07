module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    'eslint-config-pawvue'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
