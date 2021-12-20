<template>
    <div class="photo">
        <h1 class="photo__title">
            My Photo page
        </h1>
        <p class="photo__description">
            This template help you to start project on Vue2
        </p>
        <img
            src="@images/multfilm.jpg"
            alt="my photo"
            width="1024"
            height="683"
        >
    </div>
</template>

<script>
export default {
    name: 'PhotoPage',
};
</script>

<style lang="scss">
.photo {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        text-align: center;
    }
}
</style>
