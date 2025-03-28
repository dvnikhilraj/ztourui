const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "array-callback-return": "warn",
    "no-var" :'off',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/await-thenable': 'warn',
    'no-alert': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    ' @typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreOnInitialization: true,
      },
    ],
    'import/newline-after-import': 'error',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          kebabCase: true, // personal style
          pascalCase: true,
        },
      },
    ],

    // Deactivated
    '@typescript-eslint/dot-notation': 'off', // paths are used with a dot notation
    '@typescript-eslint/no-misused-promises': 'off', // onClick with async fails
    '@typescript-eslint/no-non-null-assertion': 'off', // sometimes compiler is unable to detect
    '@typescript-eslint/no-unnecessary-condition': 'off', // remove when no static data is used
    '@typescript-eslint/require-await': 'off', // Server Actions require async flag always
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // personal style
    'import/no-default-export': 'off', // Next.js components must be exported as default
    'import/no-extraneous-dependencies': 'off', // conflict with sort-imports plugin
    'import/order': 'off', // using custom sort plugin
    'no-nested-ternary': 'off', // personal style
    'no-redeclare': 'off', // conflict with TypeScript function overloads
    'react/jsx-fragments': 'off', // personal style
    'react/prop-types': 'off', // TypeScript is used for type checking

    '@next/next/no-img-element': 'off', // Temporary disabled
    "no-unused-vars": "off",
     '@typescript-eslint/no-unsafe-assignment':'off',
     "@typescript-eslint/no-unused-vars": "off",
     '@typescript-eslint/prefer-promise-reject-errors':'off',
     '@typescript-eslint/no-unsafe-return':'off',
     '@typescript-eslint/explicit-function-return-type':'off',
     '@typescript-eslint/no-empty-function':'off',
     '@typescript-eslint/naming-convention':'off',
     '@typescript-eslint/no-unsafe-member-access':'off',
     '@typescript-eslint/ban-types':'off',
     '@typescript-eslint/no-floating-promises':'off',
     '@typescript-eslint/restrict-plus-operands':'off',
     '@typescript-eslint/no-unsafe-call':'off',
     '@typescript-eslint/no-unsafe-argument':'off'
  },
};
