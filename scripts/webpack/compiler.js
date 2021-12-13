import { webpack } from 'webpack';
import { merge } from 'webpack-merge';

import {
    getWebpackBaseConfig,
    getWebpackDevConfig,
    getWebpackProdConfig
} from './configs';

export const getWebpackCompiler = () => {
    let config = getWebpackBaseConfig();

    switch (process.env.NODE_ENV) {
        case 'production':
            config = merge(config, getWebpackProdConfig());
            break;
        case 'development':
            config = merge(config, getWebpackDevConfig());
            break;
        default:
            config = merge(config, getWebpackProdConfig());
    }

    const compiler = webpack(config);

    compiler.hooks.beforeRun.tap({ name: 'start' }, () => {
        console.log('compilation start');
    });

    compiler.hooks.done.tap({ name: 'done' }, () => {
        console.log('compilation completed');
    });

    return compiler;
};
