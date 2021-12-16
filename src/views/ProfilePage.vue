<template>
    <div class="profile">
        <h1 class="profile__title">
            Profile page
        </h1>
        <p class="profile__description">
            This is profile page
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
};
</script>

<style lang="scss">
.profile {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        text-align: center;
    }
}
</style>
