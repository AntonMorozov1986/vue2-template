module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
    ],
    rules: {
        "plugin/rational-order": [true, {
            "border-in-box-model": false,
            "empty-line-between-groups": true,
        }],
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
