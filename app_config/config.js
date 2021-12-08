const APP_CONFIG = {
    name: {
        default: 'my-app',
        value: process.env.APP_NAME,
        type: String,
    },
    local_domain: {
        default: 'my-app.local',
        value: process.env.LOCAL_DEV_DOMAIN,
        type: String,
    },
    api_url: {
        default: 'http://localhost:3000',
        value: process.env.API_BASE_URL,
        type: String,
    },
    api_routes: {
        default: '["/api", "/routes"]',
        value: process.env.API_ROUTES,
        type: Array,
    },
};

module.exports = key => {
    let value = null;

    if (Object.keys(APP_CONFIG).includes(key)) {
        const configItem = APP_CONFIG[key];
        value = configItem.value !== undefined ? configItem.value : configItem.default;

        switch (configItem.type) {
            case String:
                value = String(value);
                break;

            case Number:
                value = Number(value);
                break;

            case Boolean:
                value = Boolean(JSON.parse(value));
                break;

            case Object:
                value = JSON.parse(value);
                break;

            case Array:
                value = JSON.parse(value);
                break;
        }
    }

    return value;
};
