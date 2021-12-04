require('dotenv').config();
const { path: PROJECT_ROOT } = require('app-root-path');
const path = require('path');
const appConfig = require(path.resolve(PROJECT_ROOT, 'app_config/config.js'));

const { HotModuleReplacementPlugin } = require('webpack');

module.exports = () => {
    return {
        entry: {
            app: './src/main.js',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                    ],
                },
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
        plugins: [
            new HotModuleReplacementPlugin(),
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
