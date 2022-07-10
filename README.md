# minimalist-ticket-front

- Created project
yarn create vite minimalist-ticket-front --template react-ts

- Add Jest and Eslint
  yarn add -D jest
  yarn jest --init
  yarn add -D eslint eslint-config-prettier eslint-plugin-prettier prettier ts-node
  npm init @eslint/config

- Modified eslintrc.js:
    module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    };

- Add jest config in test/jest-e2e.json:
    {
        "moduleFileExtensions": ["js", "json", "ts"],
        "rootDir": ".",
        "testEnvironment": "node",
        "testRegex": ".e2e-spec.ts$",
        "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
        }
    }

- Add base in vite.config.ts:
  base: 'minimalist-ticket-front/'

- Add file github actions .github/workflows/ci-cd.yml
