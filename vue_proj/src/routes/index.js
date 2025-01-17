
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "MainPage" */ '../views/MainPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Главная'
        }
      ]
    }
  },
  {
    path: '/about/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "HistoryPage" */ '../views/HistoryPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'История'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "CurrentDealPage */ '../views/CurrentDealPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'О кафедре'
        }
      ]
    }
  },

  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "CurrentDealPage" */ '../views/NewsPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Новости'
        }
      ]
    }
  },
  {
    path: '/deal',
    name: 'deal',
    meta: {
      breadcrumb: [
        {
          name: 'Текущая деятельность'
        }
      ]
    }
  },
  {
    path: '/stuff',
    name: 'stuff',
    component: () => import(/* webpackChunkName: "StuffPage" */ '../views/StuffPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Сотрудники'
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Страница 404'
        }
      ]
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;