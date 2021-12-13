import path from 'path';
import { merge } from 'webpack-merge';
import { PROJECT_ROOT } from '../constants';

import * as loaders from '../modules/loaders';
import * as plugins from '../modules/plugins';

import TerserPlugin from 'terser-webpack-plugin';


function resolve(dir) {
    return path.resolve(PROJECT_ROOT, dir);
}

export const getWebpackProdConfig = () => {
    return merge(
        {
            mode: 'production',
            output: {
                clean: true,
                path: resolve('dist'),
                publicPath: '/',
                assetModuleFilename: 'assets/[hash][ext]?[query]',
                filename: 'assets/js/[name].[contenthash:8].js',
            },
            optimization: {
                runtimeChunk: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    minRemainingSize: 0,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    enforceSizeThreshold: 50000,
                    cacheGroups: {
                        defaultVendors: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            reuseExistingChunk: true,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true,
                        },
                    },
                },
                minimize: true,
                minimizer: [new TerserPlugin()],
            },
        },
        loaders.cssLoaderProd(),
        loaders.sassLoaderProd(),
        plugins.miniCssExtractPlugin(),
        plugins.bundleAnalyzePlugin()
    );
};
