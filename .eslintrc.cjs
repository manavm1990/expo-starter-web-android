module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
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
    'use-encapsulation/prefer-custom-hooks': ['warn', { allow: ['useMemo'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
