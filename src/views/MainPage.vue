<template>
    <div class="main">
        <h1 class="main__title">
            Vue 2 Template page
        </h1>
        <p class="main__description">
            This template help you to start project on Vue2
        </p>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
};
</script>

<style lang="scss">
.main {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        text-align: center;
    }
}
</style>
