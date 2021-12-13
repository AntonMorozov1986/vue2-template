module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: [
        'vue',
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    globals: {
        __ENV__: true,
    },
    rules: {
        'camelcase': [0, {
            properties: 'never',
        }],
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
        }],
        'quote-props': [2, 'consistent-as-needed'],
        'indent': [2, 4, {
            SwitchCase: 1,
        }],
        'quotes': [2, 'single'],
        'one-var': ['error', {
            initialized: 'never',
            uninitialized: 'always',
        }],
        'no-var': 2,
        'object-shorthand': [2, 'always'],
        'array-callback-return': [2, {
            allowImplicit: true,
        }],
        'prefer-destructuring': [2, {
            VariableDeclarator: {
                array: false,
                object: true,
            },
        }],
        'prefer-rest-params': 2,
        'eqeqeq': [2, 'always'],
        'no-case-declarations': 2,
        'no-unneeded-ternary': 2,
        'no-else-return': ['error', {
            allowElseIf: true,
        }],
        'newline-per-chained-call': [2, {
            ignoreChainWithDepth: 2,
        }],
        'array-bracket-spacing': [2, 'never'],
        'object-curly-spacing': [2, 'always'],
        'arrow-parens': [2, 'as-needed'],
        'no-confusing-arrow': [2, {
            allowParens: true,
        }],
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-restricted-syntax': [2, 'ForInStatement', 'ForOfStatement'],
        'prefer-arrow-callback': [2, {
            allowNamedFunctions: true,
        }],
        'semi': [2, 'always'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never',
        }],
        'no-multi-assign': 2,

        //vue rules
        'vue/html-indent': ['error', 4],
    },
};
