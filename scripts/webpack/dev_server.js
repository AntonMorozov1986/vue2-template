require('dotenv').config();

const { APP_CONFIG_FILE } = require('./constants');
const appConfig = require(APP_CONFIG_FILE);

const WebpackDevServer = require('webpack-dev-server');
// const chalk = require('chalk'); // Красит консоль

import { getWebpackCompiler } from './compiler';

console.log('START BUILD');

const getProxyList = () => {
    const api_routes = appConfig('api_routes');
    const api_url = appConfig('api_url');
    if (!api_routes) {
        return {};
    }
    const proxyList = {};
    api_routes.forEach(route => {
        proxyList[route] = api_url;
    });

    return proxyList;
};

const webpackCompiler = getWebpackCompiler();

const devServerOptions = {
    compress: true,
    hot: true,
    host: appConfig('local_domain'),
    historyApiFallback: true,
    proxy: getProxyList(),
};
const server = new WebpackDevServer(devServerOptions, webpackCompiler);

server.start();
