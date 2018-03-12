import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Layout from '@/example/layout';
import Accordion from '@/example/accordion';

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
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/accordion',
      name: 'Accordion',
      component: Accordion
    }
  ]
});
