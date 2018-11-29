import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import challenge1 from './views/challenge1.vue';
import challenge2 from './views/challenge2.vue';
import challenge3 from './views/challenge3.vue';

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
