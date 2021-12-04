require('dotenv').config();

const WebpackDevServer = require('webpack-dev-server');
// const chalk = require('chalk');

const webpackDevConfig = require('./configs/webpack.dev');
const getWebpackCompiler = require('./compiler');

console.clear();
console.log('START BUILD');

const webpackCompiler = getWebpackCompiler();

const devServerOptions = { ...webpackDevConfig().devServer };
const server = new WebpackDevServer(devServerOptions, webpackCompiler);

server.start();
