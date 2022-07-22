module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-rational-order',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
    ],
    rules: {
        "linebreaks": "unix",

        "plugin/rational-order": [true, {
            "border-in-box-model": false,
            "empty-line-between-groups": true,
        }],

        'declaration-no-important': true,

        'color-no-invalid-hex': true,
        'color-hex-case': 'lower',
        'color-hex-length': 'long',

        'indentation': 4,
        'max-empty-lines': 1,
        'max-line-length': [
            100,
            {
                severity: 'warning',
            },
        ],
    },
};
