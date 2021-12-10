export const vueLoader = () => ({
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
});
