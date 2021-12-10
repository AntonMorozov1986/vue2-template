import path from 'path';
import { PROJECT_ROOT } from '../constants';

import * as loaders from '../modules/loaders';
import * as plugins from '../modules/plugins';
import { merge } from 'webpack-merge';

function resolve(dir) {
    return path.resolve(PROJECT_ROOT, dir);
}


const getWebpackRootConfig = require(path.resolve(PROJECT_ROOT, 'webpack.base.config.js'));

export const getWebpackBaseConfig = () => {
    return merge(
        {
            entry: {
                app: resolve('src/main.js'),
            },
            module: {
                noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
            },
            resolve: getWebpackRootConfig().resolve,
            stats: {
                hash: true,
                colors: true,
                env: true,
                logging: 'info',
                modules: false,
            },
        },
        // loaders
        loaders.vueLoader(),
        loaders.jsLoader(),
        loaders.imagesLoader(),
        loaders.fontsLoader(),
        // plugins
        plugins.vuePlugin(),
        plugins.htmlPlugin(),
        plugins.definePlugin()
    );
};
