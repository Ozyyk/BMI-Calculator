module.exports = {
  plugins: [
    'unused-imports',
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'unicorn',
    'simple-import-sort',
    'sonarjs',
  ],
  extends: [
    'airbnb-typescript',
    'next/core-web-vitals', // https://nextjs.org/docs/basic-features/eslint#core-web-vitals
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended', // https://mysticatea.github.io/eslint-plugin-eslint-comments
    'plugin:sonarjs/recommended', // https://github.com/SonarSource/eslint-plugin-sonarjs
    'plugin:promise/recommended', // https://www.npmjs.com/package/eslint-plugin-promise*/
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended', // Formating & Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        bracketSameLine: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-duplicate-imports': 'error',
    'import/no-default-export': 'error',
    'import/no-cycle': 'warn',
    'sonarjs/no-small-switch': 'off',
    'promise/always-return': ['error', { ignoreLastCallback: true }],
    'promise/catch-or-return': ['error', { allowFinally: true }],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      { 'ts-ignore': 'allow-with-description', minimumDescriptionLength: 2 },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        filter: '__typename',
        format: null,
      },
    ],
    'unicorn/filename-case': [
      'warn',
      {
        case: 'kebabCase',
        ignore: ['^use', '^\\['],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'unicorn/expiring-todo-comments': [
      'off',
      {
        terms: ['todo', 'fixme', 'xxx'],
      },
    ],
    'unicorn/prevent-abbreviations': ['off'],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'warn',
    'unicorn/catch-error-name': 'warn',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-array-reduce': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
  },
  overrides: [
    {
      files: [
        'src/pages/**/*.tsx',
        'src/pages/api/**/*.ts',
        'src/**/{page,template,layout,loading,not-found,error}.tsx',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/@types/resources.d.ts'],
      rules: {
        'import/no-default-export': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};