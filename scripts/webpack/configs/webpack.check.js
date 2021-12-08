import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const getWebpackCheckConfig = () => {
    return {
        plugins: [
            new BundleAnalyzerPlugin(),
        ],
    };
};
