import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Header from '@/example/header';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    }
  ]
});
