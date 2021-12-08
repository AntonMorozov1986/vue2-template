module.exports = api =>{
    const env = api.env();
    api.cache.using(() => env === 'development');

    const plugins = ['dynamic-import-node'];

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: false,
                    spec: true, // код более стабильный, но медленнее
                    loose: false, // код менее стабильный, но быстрее,
                    targets: {
                        node: 'current',
                    }
                },
            ],
        ],
        plugins,
    };
};
