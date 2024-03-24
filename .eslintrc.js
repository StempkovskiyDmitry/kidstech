const error = 'error';
const warn = 'warn';
const off = 'off';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'react/default-props-match-prop-types': [error],
        'array-bracket-spacing': [error, 'never'],
        'object-curly-spacing': [error, 'always'],
        quotes: [error, 'single'],
        'react-hooks/exhaustive-deps': off,
        'react/no-children-prop': error,
        'react/require-default-props': [off],
        'react/sort-prop-types': [error],
        'import/first': 2,
        'react/prefer-stateless-function': error,
        'react/jsx-curly-brace-presence': [error, 'never'],
        'react/no-unstable-nested-components': [error, { allowAsProps: true }],
        'no-undef': off,
        'no-shadow': off,
        'no-console': error,
        'no-unused-vars': off,
        'react/jsx-sort-props': [
          warn,
          {
            callbacksLast: true,
            shorthandFirst: true,
            multiline: 'ignore',
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        'max-lines': [error, { max: 350, skipBlankLines: true }],
        'arrow-parens': [error, 'as-needed'],
        'import/no-duplicates': error,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
};
