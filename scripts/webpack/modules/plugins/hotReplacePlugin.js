import { HotModuleReplacementPlugin } from 'webpack';

export const hotReplacePlugin = () => ({
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
});
