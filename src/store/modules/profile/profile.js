import { SET_NAME, SET_EMAIL } from './mutationTypes';

const state = {
    name: 'John',
    surname: 'Phillips',
    email: 'test@example.com',
};

const getters = {
    email: state => state.email,
    fullName: state => `${state.name} ${state.surname}`,
};

const mutations = {
    [SET_NAME](state, newName) {
        state.name = newName;
    },
    [SET_EMAIL](state, newEmail) {
        state.email = newEmail;
    },
};

const actions = {
    changeName({ commit }, newName) {
        if (!newName || newName === '') {
            console.error(`New name is not valid or empty - "${newName}"`);
        } else {
            commit(SET_NAME, newName);
        }
    },
    checkEmail(_, email) {
        const emailRegExp = /^\w+@\w+.\w{2,3}$/i;
        return emailRegExp.test(email);
    },
    async changeEmail({ commit, dispatch }, newEmail) {
        const isEmailValid = await dispatch('checkEmail', newEmail);
        if (isEmailValid) {
            commit(SET_EMAIL, newEmail);
        } else {
            console.error(`New email is not valid - "${newEmail}"`);
        }
    },
};

export const profileStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};


