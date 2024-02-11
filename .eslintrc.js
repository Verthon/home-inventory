/**
 * ESLint configuration
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {},
  overrides: [
    {
      files: ['**/*.spec.{js,ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        'react/react-in-jsx-scope': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        'import/no-cycle': ['off'],
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['src/**/*'],
      rules: {
        'react/react-in-jsx-scope': ['off'],
      },
    },
  ],
}
