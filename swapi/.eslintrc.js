module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ["@vue"],
    "extends": ["plugin:vue/base"],
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 6,
    },
    rules: {
        'no-console': 'off',
    },
};