module.exports = api =>{
    const env = api.env();
    api.cache.using(() => env === 'production');

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    // debug: true,
                    spec: true, // код более стабильный, но медленнее
                    loose: false, // код менее стабильный, но быстрее
                },
            ],
        ],
    };
};
