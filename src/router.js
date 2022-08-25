// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'index' */ './App.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ './components/CountriesList.vue'),
    children: [
      {
        path: '/details',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ './components/CountryDetails.vue')
      },
    ]
  }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
