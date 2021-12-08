const path = require('path');
import { PROJECT_ROOT, APP_CONFIG_FILE } from '../constants';

const appConfig = require(APP_CONFIG_FILE);
const getWebpackRootConfig = require(path.resolve(PROJECT_ROOT, 'webpack.base.config.js'));


const { VueLoaderPlugin } = require('vue-loader');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

function resolve(dir) {
    return path.resolve(PROJECT_ROOT, dir);
}

export const getWebpackBaseConfig = () => {
    return {
        entry: {
            app: resolve('src/main.js'),
        },
        module: {
            noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/images/[name].[hash][ext][query]',
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[name].[hash][ext][query]',
                    },
                },
            ],
        },
        resolve: getWebpackRootConfig().resolve,
        plugins: [
            new VueLoaderPlugin(),
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
        stats: {
            hash: true,
            colors: true,
            env: true,
            logging: 'info',
            modules: false,
        },
    };
};
