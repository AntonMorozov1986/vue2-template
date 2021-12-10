export const cssLoaderDev = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
        ],
    },
});
