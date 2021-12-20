import Vue from 'vue';
import Vuex from 'vuex';

import { profileStore, notesStore } from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        profileStore,
        notesStore,
    },
});
