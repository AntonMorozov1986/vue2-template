import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export const cssLoaderProd = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
});
