import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export const sassLoaderProd = () => ({
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
});
