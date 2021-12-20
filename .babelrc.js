module.exports = api =>{
    const env = api.env();
    api.cache.using(() => env === 'production');

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: false,
                    spec: true, // код более стабильный, но медленнее
                    loose: false, // код менее стабильный, но быстрее
                    useBuiltIns: 'usage', // Use polyfills in bundle when it is needed
                    corejs: '3', // It's need for useBuiltIns option
                },
            ],
        ],
    };
};
