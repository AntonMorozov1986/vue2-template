const path = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

// const { WEBPACK_DIR, NODE_MODULES_DIR } = require(path.resolve(PROJECT_ROOT, 'app_config/directory_path.js'));
const appConfig = require(path.resolve(PROJECT_ROOT, 'app_config/config.js'));
const getWebpackResolve = require(path.resolve(PROJECT_ROOT, 'webpack.base.config.js'));


const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

function resolve(dir) {
    return path.resolve(PROJECT_ROOT, dir);
}

module.exports = () => {
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
            ],
        },
        resolve: getWebpackResolve().resolve,
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
