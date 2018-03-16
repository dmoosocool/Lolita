// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 必须校验分号,
        'semi': [1, 'always'],
        // 驼峰命名
        'camelcase': 2,
        // 强制使用一致的缩进
        "indent": [1, 2],
        // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        'for-direction': 'error',
        // 不允许使用console
        'no-console': 'off',
        // 强制使用一致的反勾号、双引号或单引号
        "quotes": ['error', "single"],
        // 强制在 JSX 属性中一致地使用双引号或单引号
        "jsx-quotes": ['error', "prefer-single"],
    }
}