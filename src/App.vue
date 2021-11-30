<template>
    <div>
        <GreetingElement />
        <p>Some app text</p>
    </div>
</template>
<script>
import GreetingElement from './components/Greeting';

export default {
    name: 'App',
    components: {
        GreetingElement,
    },
};
</script>

<style lang="scss">

</style>
