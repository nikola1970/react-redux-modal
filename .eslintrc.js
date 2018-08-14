module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        es6: true,
        browser: true
    },
    extends: ["airbnb"],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": 0,
        "react/jsx-one-expression-per-line": 0,
        quotes: 0,
        "linebreak-style": 0,
        indent: [0, "tab"],
        "object-curly-newline": 0,
        "comma-dangle": 0,
        "arrow-parens": 0,
        "import/prefer-default-export": 0,
        "no-param-reassign": 0,
        "no-shadow": "off",
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/jsx-indent-props": 0
    }
};
