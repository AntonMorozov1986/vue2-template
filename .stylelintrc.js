module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-rational-order',
        'stylelint-config-standard-scss',
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
        }]
    },
};
