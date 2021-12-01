<template>
    <div>
        <p>Welcome to my test page</p>
        <img
            src="@src/assets/images/multfilm.jpg"
            alt="some image"
            width="1024"
            height="683"
        >
    </div>
</template>

<script>
export default {
    name: 'GreetingElement',
};
</script>

<style lang="scss">
div {
    position: relative;

    margin: 5px;
    padding: 0;

    font-size: 16px;
    text-transform: capitalize;

    background-color: #a4a4ff;

    img {
        background-color: #a4a4ff;
        border: 1px solid #ff0000;
    }
}
</style>
