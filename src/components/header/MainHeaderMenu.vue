<template>
    <nav class="main-menu">
        <ul class="main-menu__list">
            <li
                v-for="menuItem in mainMenuList"
                :key="menuItem.name"
                class="main-menu__item"
            >
                <router-link
                    class="main-menu__link"
                    :class="{'main-menu__link-active': menuItem.name === activeName}"
                    :to="{name: menuItem.name}"
                    @click="activeName = menuItem.name"
                >
                    {{ menuItem.legend }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { routes } from '@router';

export default {
    name: 'MainHeaderMenu',
    data() {
        return {
            activeName: 'Main',
        };
    },
    computed: {
        mainMenuList() {
            const menuList = routes.map(route => {
                const { name, meta } = route;
                return {
                    name,
                    legend: meta?.legend,
                };
            });
            return menuList.filter( menuItem => menuItem.name && menuItem.name !== 'Error');
        },
    },
};
</script>

<style lang="scss">
.main-menu {
    display: flex;
    align-items: center;
    &__list {
        display: flex;
        align-items: center;
        margin: 0;

        padding: 0;

        list-style-type: none;
    }

    &__item {
        padding: 8px;

        font-weight: 500;
        font-size: 16px;

        cursor: pointer;
    }

    &__link {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;

        color: #000000;
        text-transform: uppercase;
        text-decoration: none;

        transition: 0.5s;

        user-select: none;

        &:after {
            position: absolute;
            bottom: -4px;

            width: 0;
            height: 3px;

            background-color: #3498db;
            border-radius: 3px;

            transition: width 0.3s, background-color 0.3s;

            content: '';
        }

        &:hover {
            color: #95a5a6;
            &:after {
                width: 100%;
            }
        }

        &:active {
            &:after {
                background-color: #f25e5e;
            }
        }

        &-active {
            &:after{
                width: 100%;

                background-color: #f25e5e;
            }
        }
    }
}
</style>
