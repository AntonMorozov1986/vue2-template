import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const bundleAnalyzePlugin = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false,
            generateStatsFile: true,
        }),
    ],
});
