// "off"或 0 - 关闭规则
// "warn"或 1 - 开启规则， 使用警告级别的错误： warn(不会导致程序退出)
// "error"或 2 - 开启规则， 使用错误级别的错误： error(当被触发的时候， 程序会退出)
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // 自定义rules
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 3,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-for-template-key-on-child': 'off',
    indent: 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
        ignores: []
      }
    ],
    'comma-dangle': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
};
