import { HotModuleReplacementPlugin } from 'webpack';

export const getWebpackDevConfig = () => {
    return {
        entry: {
            app: './src/main.js',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.s[ca]ss$/i,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new HotModuleReplacementPlugin(),
        ],
        devtool: 'eval-cheap-module-source-map',
    };
};
