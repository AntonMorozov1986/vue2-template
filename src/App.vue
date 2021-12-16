<template>
    <div class="app">
        <MainHeader />
        <main class="app__main">
            <router-view />
        </main>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@components/header/MainHeader';
import MainFooter from '@components/footer/MainFooter';

export default {
    name: 'App',
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style lang="scss">
@import '~@styles/main';

.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__main {
        flex-grow: 2;
        box-sizing: border-box;
        max-width: 1400px;
        margin: 0 auto;
        padding: 12px 80px;
    }
}
</style>
