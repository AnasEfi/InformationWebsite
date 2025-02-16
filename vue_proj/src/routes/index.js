
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

        { name: 'О кафедре', link: 'about' },
        { name: 'История', link: 'history' },
        { name: 'Основные вехи' }
      ]
    }
  },
  {
    path: '/about/history/picture',
    name: 'picture',
    component: () => import(/* webpackChunkName: "PicturePage" */ '../views/PicturePage.vue'),
    meta: {
      breadcrumb: [

        { name: 'О кафедре', link: 'about' },
        { name: 'История', link: 'history' },
        { name: 'Портрет кафедры' }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "CurrentDealPage */ '../views/CurrentDealPage.vue'),
    meta: {
      breadcrumb: [
        { name: 'О кафедре' },
        { name: 'Текущая деятельность' }
      ]
    }
  },

  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "NewsPage" */ '../views/NewsPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Новости'
        }
      ]
    }
  },
  {
    path: '/about/deal',
    name: 'deal',
    component: () => import(/* webpackChunkName: "CurrentDealPage" */ '../views/CurrentDealPage.vue'),
    meta: {
      breadcrumb: [
        { name: 'О кафедре', link: 'about' },
        { name: 'Текущая деятельность' }
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
    path: '/staff/:staffName',
    name: 'staffCard',
    component: () => import(/* webpackChunkName: "StaffCard" */ '../views/StaffCardPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Сотрудники'
        }
      ]
    }
  },
 
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: "StudyPage" */ '../views/StudyPage.vue'),
    meta: {
      breadcrumb: [
        {
          name: 'Учебная работа', link: 'study'
        }
      ]
    }
  },
  {
    path: '/study/practice',
    name: 'practice',
    component: () => import(/* webpackChunkName: "PracticePage" */ '../views/PracticePage.vue'),
    meta: {
      breadcrumb: [
        { name: 'Учебная работа', link: 'study' },
        { name: 'Практика' }
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
    path: '/about/history/forty',
    name: '/forty',
    component: () => import(/* webpackChunkName: "AnniversaryFortyPage" */ '../views/AnniversaryFortyPage.vue'),
    meta: {
      breadcrumb: [
        { name: 'О кафедре', link: 'about' },
        { name: 'История', link: 'history' },
        { name: 'Юбилей' }
      ]
    }
  },
  {
    path: "/about/history/heads",
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