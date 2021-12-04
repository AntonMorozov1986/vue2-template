const webpack = require('webpack');
const { merge } = require('webpack-merge');

const getWebpackBaseConfig = require('./configs/webpack.base');
const getWebpackDevConfig = require('./configs/webpack.dev');
const getWebpackProdConfig = require('./configs/webpack.prod');
const getWebpackCheckConfig = require('./configs/webpack.check');

module.exports = () => {
    let config = getWebpackBaseConfig();
    switch (process.env.NODE_ENV) {
        case 'production':
            config = merge(config, getWebpackProdConfig());
            if (process.env.CHECK_BUILD) {
                config = merge(config, getWebpackCheckConfig());
            }
            break;
        case 'development':
            config = merge(config, getWebpackDevConfig());
    }

    return webpack(config);
};
