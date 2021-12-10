export const imagesLoader = () => ({
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext][query]',
                },
            },
        ],
    },
});
