module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'indent': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/ban-ts-comment': 'off',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
