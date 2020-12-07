module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    'eslint-config-pawvue'
  ],
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'rules': {
    'quotes': ['error', 'single']
  },
  'overrides': [
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      'env': {
        'jest': true
      }
    }
  ]
}
