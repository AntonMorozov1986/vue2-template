<template>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus ea facilis ipsa odio officiis quam quas, quo quod repellendus, sequi veniam! Corporis dolorem dolorum eaque explicabo ipsa, provident quasi repellendus sint. Et labore laborum repellendus reprehenderit! Accusantium blanditiis consequatur eius eligendi error facere officiis quibusdam, quidem quo quod reprehenderit sed sunt? Accusamus amet animi aperiam commodi consequatur cum cupiditate dolor dolore doloremque enim est et eveniet ex facilis in labore maxime, nihil nulla pariatur porro praesentium quibusdam quisquam ratione repellat sequi veritatis voluptatibus, voluptatum. Cupiditate illum quos repellat suscipit. Culpa delectus illo laboriosam quae saepe sunt tenetur ullam voluptas.</p>
        <GreetingElement />
        <p>Some app text</p>
        <button @click="fetchDataApi">
            get data from api
        </button>
    </div>
</template>

<script>
import GreetingElement from './components/Greeting';

export default {
    name: 'App',
    components: {
        GreetingElement,
    },
    methods: {
        fetchDataApi() {
            return fetch('/api')
                .then(response => {
                    return response.json();
                })
                .then(list => {
                    console.log('list', list);
                })
                .catch(error => {
                    console.log(`ОШИБКА!!! - ${error}`);
                });
        },
    },
};
</script>

<style lang="scss">
@import '~@styles/main';

div{
    color: #a4a4ff;
    text-transform: uppercase;

    background-color: #f7f7f7;
}
</style>
