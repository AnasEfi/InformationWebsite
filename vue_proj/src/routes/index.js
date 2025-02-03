
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
          name: 'Основные вехи'
        }
      ]
    }
  },
  {
    path: '/about/history/picture',
    name: 'picture',
    component: () => import(/* webpackChunkName: "PicturePage" */ '../views/PicturePage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Портрет кафедры'
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
    path: '/staff',
    name: 'staff',
    component: () => import(/* webpackChunkName: "StaffPage" */ '../views/StaffPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Сотрудники'
        }
      ]
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "ResourcesPage" */ '../views/ResourcesPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Ресурсы'
        }
      ]
    }
  },
  {
    path: '/science',
    name: 'science',
    component: () => import(/* webpackChunkName: "SciencePage" */ '../views/SciencePage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Наука'
        }
      ]
    }
  },
  {
    path: '/forty',
    name: '/forty',
    component: () => import(/* webpackChunkName: "AnniversaryFortyPage" */ '../views/AnniversaryFortyPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Юбилей'
        }
      ]
    }
  },
  {
    path: '/heads',
    name: '/heads',
    component: () => import(/* webpackChunkName: "HeadsPage" */ '../views/HeadsPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Заведующие'
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