import Vue from 'vue';
import Router from 'vue-router';
import Reference from './components/Pages/ReferencePage.vue';
import Addition from './components/Pages/AdditionPage.vue';
import Delete from './components/Pages/DeletePage.vue';
import Update from './components/Pages/UpdatePage.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',　//vue-routerで#を削除するために必要だけど、buildすると画面遷移できない。そのうち再調査。
  base: process.env.BASE_URL,
  routes: [
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
