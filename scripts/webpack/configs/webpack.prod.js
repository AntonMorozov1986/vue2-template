import { merge } from 'webpack-merge';

import * as loaders from '../modules/loaders';
import * as plugins from '../modules/plugins';
import * as optimize from '../modules/optimization';

export const getWebpackProdConfig = () => {
    return merge(
        {
            mode: 'production',
        },
        //loaders
        loaders.cssLoaderProd(),
        loaders.sassLoaderProd(),
        //plugins
        plugins.miniCssExtractPlugin(),
        plugins.bundleAnalyzePlugin(),
        //optimize
        optimize.buildOptimize(),
        optimize.filterMomentLocale()
    );
};
