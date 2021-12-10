export const sassLoaderDev = () => ({
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
});
