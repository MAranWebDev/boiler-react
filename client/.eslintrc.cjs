module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb' /* for airbnb */,
    'airbnb/hooks' /* for airbnb */,
    'airbnb-typescript' /* for airbnb ts */,
    'plugin:@typescript-eslint/recommended' /* for airbnb ts */,
    'plugin:@typescript-eslint/recommended-requiring-type-checking' /* for airbnb ts */,
    'prettier' /* for prettier, make sure to put it last, to override other configs */,
  ],
  /* fix assignment to property of function parameter 'state'*/
  overrides: [
    {
      files: ['*Slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json' /* for airbnb ts */,
    tsconfigRootDir: __dirname /* fix cannot read file tsconfig.json */,
  },
  plugins: ['react', '@typescript-eslint', 'jest' /* for jest */],
  /* fix tsconfig does not include these files */
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'jest.setup.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off' /* turn off import React from 'react' */,
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
  },
};
