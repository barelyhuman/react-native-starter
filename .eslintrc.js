module.exports = {
  root: true,
  extends: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['import', 'simple-import-sort'],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    // conflicting rules with prettier
    'function-paren-newline': 'off',
    'function-call-argument-newline': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'semi': 'off',
    'quotes': 'off',

    // simple import and import
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/named': 'off',

    // basics
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quote-props': ['error', 'consistent-as-needed'],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'complexity': ['off', 11],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'yoda': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'indent': 'off',
    'prefer-arrow-callback': 'off',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
}
