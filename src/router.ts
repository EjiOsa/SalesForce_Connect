import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Reference from "./components/ReferencePage.vue";
import Addition from "./components/AdditionPage.vue";
import Delete from "./components/DeletePage.vue";
import Update from "./components/UpdatePage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/',
      name: 'Reference',
      component: Reference,
    },
    {
      path: '/add',
      name: 'add',
      component: Addition,
    },
    {
      path: '/del',
      name: 'del',
      component: Delete,
    },
    {
      path: '/upda',
      name: 'upda',
      component: Update,
    },
  ],
});
