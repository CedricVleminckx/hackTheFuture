import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Challenge1 from './views/Challenge1.vue';
import Challenge2 from './views/Challenge2.vue';
import Challenge3 from './views/Challenge3.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/challenge1',
            name: 'challenge1',
            component: Challenge1
        },
        {
            path: '/challenge2',
            name: 'challenge2',
            component: Challenge2
        },
        {
            path: '/challenge3',
            name: 'challenge3',
            component: Challenge3
        }
    ]
});
