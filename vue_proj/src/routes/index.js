import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "MainPage" */ '../views/MainPage.vue'),
  },
  {
    path: '/about/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "HistoryPage" */ '../views/HistoryPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "CurrentDealPage */ '../views/CurrentDealPage.vue'),
  },
  {
    path: '/deal',
    name: 'deal',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;