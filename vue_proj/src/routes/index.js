import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import HistoryPage from '../views/HistoryPage.vue';
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/about/history',
    name: 'history',
    component: HistoryPage,
  },
  {
    path: '/about',
    name: 'about',
    component: HistoryPage,
  },
  {
    path: '/deal',
    name: 'deal'
    
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;