require('dotenv').config();
const path = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

function resolve(dir) {
    return path.resolve(PROJECT_ROOT, dir);
}

module.exports = () => {
    return {
        mode: 'production',
        output: {
            clean: true,
            path: resolve('dist'),
            publicPath: '/',
            assetModuleFilename: 'assets/[hash][ext]?[query]',
            filename: 'assets/js/[name].[contenthash:8].js',
        },
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                    ],
                },
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
        plugins: [
            new MiniCSSExtractPlugin({
                filename: '[name].[contenthash:8].css',
            }),
        ],
    };
};
