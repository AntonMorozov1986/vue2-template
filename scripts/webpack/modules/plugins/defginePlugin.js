import { DefinePlugin } from 'webpack';
import { APP_CONFIG_FILE } from '../../constants';

const appConfig = require(APP_CONFIG_FILE);

export const definePlugin = () => ({
    plugins: [
        new DefinePlugin({
            ENVIRONMENT_MODE: JSON.stringify(process.env.NODE_ENV),
            IS_PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
            APP_NAME: JSON.stringify(appConfig('name')),
        }),
    ],
});
