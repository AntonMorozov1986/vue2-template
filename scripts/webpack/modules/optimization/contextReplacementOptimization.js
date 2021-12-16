// this plugin can filter libraries and minimize bundle
import { ContextReplacementPlugin } from 'webpack';

//test build optimization
export const filterMomentLocale = () => ({
    plugins: [
        new ContextReplacementPlugin(
            /moment\/locale/,
            /ru|en/),
    ],
});
