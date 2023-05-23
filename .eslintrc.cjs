module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: { '@typescript-eslint/explicit-function-return-type': 1 },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', 'use-encapsulation'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['error', 'info', 'table', 'warn'],
      },
    ],
    'no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],

    // https://callstack.github.io/react-native-testing-library/docs/eslint-plugin-testing-library
    'testing-library/consistent-data-testid': [
      2,
      {
        testIdAttribute: ['testID'],
        testIdPattern: '^TestId(__[A-Z]*)?$',
      },
    ],
    'testing-library/no-wait-for-empty-callback': 0,
    'testing-library/prefer-user-event': 'off',
    'testing-library/prefer-wait-for': 0,
    'use-encapsulation/prefer-custom-hooks': ['warn', { allow: ['useMemo'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
