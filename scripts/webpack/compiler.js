import { webpack } from 'webpack';
import { merge } from 'webpack-merge';

import {
    getWebpackBaseConfig,
    getWebpackCheckConfig,
    getWebpackDevConfig,
    getWebpackProdConfig
} from './configs';

export const getWebpackCompiler = () => {
    let config = getWebpackBaseConfig();
    if (process.env.NODE_ENV === 'production') {
        config = merge(config, getWebpackProdConfig());
        if (process.env.CHECK_BUILD) {
            config = merge(config, getWebpackCheckConfig());
        }
    } else {
        config = merge(config, getWebpackDevConfig());
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
