import TerserPlugin from 'terser-webpack-plugin';

export const buildOptimize = () => ({
    optimization: {
        nodeEnv: 'production',

        // production*: minification JavaScript
        minimize: true,
        minimizer: [ new TerserPlugin() ],
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
    },
});
