import { VueLoaderPlugin } from 'vue-loader';

export const vuePlugin = () => ({
    plugins: [
        new VueLoaderPlugin(),
    ],
});
