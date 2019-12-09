import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Planet from '@/components/Planet'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/planet/:id',
            name: 'Planet',
            component: Planet,
            props: {
                id: ''
            }
        }
    ],
    mode: 'history'
})