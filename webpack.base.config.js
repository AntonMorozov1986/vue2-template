// webpack config for IDE resolving paths

const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = () => {
    return {
        entry: {
            app: './src/main.js',
        },
        resolve: {
            extensions: ['.vue', '.js'],
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
                '@src': resolve('src'),
                '@fonts': resolve('src/assets/fonts'),
                '@style': resolve('src/styles'),
                '@global': resolve('src/global'),
                '@components': resolve('src/components'),
                '@constants': resolve('src/global/constants'),
                '@api': resolve('src/api'),
            },
        },
    };
};
