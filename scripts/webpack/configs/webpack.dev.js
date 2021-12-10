import { merge } from 'webpack-merge';
import * as loaders from '../modules/loaders';
import * as plugins from '../modules/plugins';

export const getWebpackDevConfig = () => {
    return merge(
        {
            entry: {
                app: './src/main.js',
            },
            mode: 'development',
            devtool: 'eval-cheap-module-source-map',
        },
        loaders.cssLoaderDev(),
        loaders.sassLoaderDev(),
        plugins.hotReplacePlugin()
    );
};
