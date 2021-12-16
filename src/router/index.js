import Vue from 'vue';
import VueRouter from 'vue-router';

const MainPage = () => import(/* webpackChunkName: "MainPage" */'@views/MainPage');
const PhotoPage = () => import(/* webpackChunkName: "PhotoPage" */'@views/PhotoPage');
const ProfilePage = () => import(/* webpackChunkName: "ProfilePage" */'@views/ProfilePage');
const NotesPage = () => import(/* webpackChunkName: "NotesPage" */'@views/NotesPage');
const ErrorPage = () => import(/* webpackChunkName: "ErrorPage" */'@views/ErrorPage');

Vue.use(VueRouter);

/*
    <=== route example ===>
    {
        path: 'meetup',
        name: 'meetup',
        component: MeetupView,
        meta: {
            legend: 'главная',
        }
        children: [
            {
                path: ':meetupToken',
                name: 'meetup-signup',
                component: MeetupSignupView,
                meta: {
                    middleware: [auth, isAdmin],
                    breadcrumbs: {
                        name: 'Список всех материалов',
                    },
                },
            },
        ],
    },

 */

export const routes = [
    {
        name: 'Main',
        path: '',
        component: MainPage,
        meta: {
            legend: 'главная',
        },
    },
    {
        name: 'Photo',
        path: '/photo',
        component: PhotoPage,
        meta: {
            legend: 'мои фото',
        },
    },
    {
        name: 'Profile',
        path: '/profile',
        component: ProfilePage,
        meta: {
            legend: 'профиль',
        },
    },
    {
        name: 'Notes',
        path: '/notes',
        component: NotesPage,
        meta: {
            legend: 'заметки',
        },
    },
    {
        name: 'Error',
        path: '/error',
        component: ErrorPage,
    },
    {
        path: '*',
        redirect: 'Error',
    },
];

export const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
});




