<template>
    <div class="notes">
        <h1 class="notes__title">
            Notes page
        </h1>
        <p class="notes__description">
            This is notes page
        </p>
    </div>
</template>

<script>
export default {
    name: 'NotesPage',
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
