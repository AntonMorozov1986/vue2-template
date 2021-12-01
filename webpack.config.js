require('dotenv').config();

const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./app_config/config');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = () => {
    return {
        entry: './src/main.js',
        mode: process.env.NODE_ENV,
        output: {
            clean: true,
            path: resolve('dist'),
            publicPath: '',
            filename: '[name].[contenthash].js',
            hashDigestLength: 8,
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/i,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.vue', '.js'],
            alias: {
                '@src': resolve('src'),
                '@style': resolve('src/styles'),
                '@global': resolve('src/global'),
                '@components': resolve('src/components'),
                '@constants': resolve('src/global/constants'),
                '@api': resolve('src/api'),
            },
        },
        plugins: [
            new VueLoaderPlugin(),
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: appConfig('name'),
                filename: 'index.html',
                template: 'public/index.html',
                favicon: 'public/favicon.svg',
                inject: true,
            }),
            new DefinePlugin({
                ENVIRONMENT_MODE: JSON.stringify(process.env.NODE_ENV),
                IS_PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
                APP_NAME: JSON.stringify(appConfig('name')),
            }),
        ],
        devServer: {
            compress: true,
            hot: true,
            host: appConfig('local_domain'),
            historyApiFallback: true,
        },
        devtool: 'eval-source-map',
    };
};
