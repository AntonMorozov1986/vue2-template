import Vue from 'vue';

import App from './App';
import { router } from '@router';

// test build optimization (filtering moment locales)
// import moment from 'moment';

// import store from './store';

Vue.config.productionTip =false;

new Vue({
    router,
    render: h =>h(App),
    // store
}).$mount('#app');
