import { SET_NOTES_LIST, ADD_NOTE } from './mutationTypes';

const getDefaultNote = () => ({
    title: 'New note',
    description: 'default note description',
    timestamp: new Date().toISOString(),
});

const state = {
    notesList: [],
};

const getters = {
    notesList: state => state.notesList,
    getNoteByIndex: state => index => state.notesList[index],
};

const mutations = {
    [SET_NOTES_LIST](state, newNotesList) {
        state.notesList = [ ...newNotesList ];
    },
    [ADD_NOTE](state, newNote) {
        state.notesList.push(newNote);
    },
};

const actions = {
    addNewNote({ commit }, newNote) {
        if (newNote) {
            commit(ADD_NOTE, newNote);
        } else {
            commit(ADD_NOTE, getDefaultNote());
        }
    },
};

export const notesStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};


