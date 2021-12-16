import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export const miniCssExtractPlugin = () => ({
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'assets/css/[name].[contenthash:8].css',
            chunkFilename: 'assets/css/[name].[contenthash:8].css',
        }),
    ],
});
