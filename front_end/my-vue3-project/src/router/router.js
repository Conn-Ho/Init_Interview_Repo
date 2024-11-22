// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import Register from '@/view/register.vue';
import Login from '@/view/login.vue';

const routes = [
    { path: '/', name: 'Login', component: Login },

    // { path: '/', name: 'Home', component: Home },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
