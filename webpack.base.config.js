// webpack config for IDE resolving paths

const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = () => {
    return {
        resolve: {
            extensions: ['.vue', '.js'],
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
                '@src': resolve('src'),
                '@global': resolve('src/global'),
                '@constants': resolve('src/global/constants'),

                '@api': resolve('src/api'),
                '@router': resolve('src/router'),
                '@store': resolve('src/store'),

                '@views': resolve('src/views'),
                '@components': resolve('src/components'),

                '@styles': resolve('src/styles'),
                '@fonts': resolve('src/assets/fonts'),
            },
        },
    };
};
