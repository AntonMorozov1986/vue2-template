<template>
    <div class="error">
        <h1 class="error__title">
            Error page
        </h1>
        <p class="error__description">
            Error 404 - not found
        </p>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
};
</script>

<style lang="scss">
.error {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        color: #f25e5e;

        text-align: center;
    }
}
</style>
