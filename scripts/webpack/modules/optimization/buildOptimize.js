import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export const buildOptimize = () => ({
    optimization: {
        nodeEnv: 'production',

        // production*: minification JavaScript
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        // production*: stop emmit when errors in compilation
        emitOnErrors: false,
        // any*: don't add empty chunks in bundle
        removeEmptyChunks: true,
        // any*: merge equal chunks
        mergeDuplicateChunks: true,
        // any*: remove module if it contain in parent module
        removeAvailableModules:true,
        // These options help webpack to compress build
        chunkIds: 'total-size',
        moduleIds: 'size',
        // Webpack tries to concatenate modules. It has additional dependencies - providedExports and usedExports
        concatenateModules: true,
        // Marks exports for optimization. Need option 'concatenateModules'
        providedExports: true,
        // Marks imports for optimization. Need option 'concatenateModules'
        usedExports: true,
        // check sideEffect flag in package.json dependencies for TreeShaking
        sideEffects: true,

        // Эта опция включена всегда. Конфигурируется в SplitChunksPlugin
        splitChunks: {
            // Режим разделения кода. По умолчанию - 'async', 'all' - отделяет чанки vendors и чанки приложения
            // 'async' - чанки с асинхронным (динамическим) импортом внутри приложения
            // 'initial' - чанки библиотек (node_modules / vendors)
            chunks: 'all', // 'async', 'initial', 'all' (async + initial)
            // Минимальный размер нового чанка для отделения.
            minSize: 30000, // bytes
            // Максимальный размер чанка
            maxSize: 100000,
            // Минимальное кол-во чанков, которые зависят от модуля, чтобы выделить модуль в отдельный чанк
            minChunks: 1,
            //Максимальное кол-во одновременных параллельных запросов чанков для асинхронного сплитинга
            //Всегда предпочитаются чанки большого размера
            maxAsyncRequests: 5,
            // Максимальное кол-во одновременных параллельных запросов чанков на один entrypoint
            //Всегда предпочитаются чанки большого размера
            maxInitialRequests: 3,

            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        // Выносит webpack runtime каждого entrypoint в отдельный чанк. default - false;
        runtimeChunk: true,
    },
});
