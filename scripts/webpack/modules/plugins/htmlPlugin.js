import HtmlWebpackPlugin from 'html-webpack-plugin';
import { APP_CONFIG_FILE } from '../../constants';

const appConfig = require(APP_CONFIG_FILE);

export const htmlPlugin = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title: appConfig('name'),
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.svg',
            inject: true,
        }),
    ],
});
