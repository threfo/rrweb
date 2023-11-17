// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    // 'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-template-curly-in-string': 'off',
    'require-await': 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}

module.exports = config
