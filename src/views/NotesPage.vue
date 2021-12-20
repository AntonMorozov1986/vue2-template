<template>
    <div class="notes">
        <h1 class="notes__title">
            Notes page
        </h1>
        <p class="notes__description">
            This is notes page
        </p>
        <div
            v-for="note in notesList"
            :key="`${note.name}-${note.timestamp}`"
        >
            <p>{{ note.title }}</p>
            <p>{{ note.description }}</p>
            <p>{{ note.timestamp }}</p>
        </div>
        <button @click="addNote(null)">
            Add default note
        </button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'NotesPage',
    computed: {
        ...mapGetters({
            notesList: 'notesStore/notesList',
            getNoteByIndex: 'notesStore/getNoteByIndex',
        }),
    },
    methods: {
        ...mapActions({
            addNote: 'notesStore/addNewNote',
        }),
    },
};
</script>

<style lang="scss">
.notes {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        text-align: center;
    }
}
</style>
