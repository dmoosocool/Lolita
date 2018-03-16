import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Seletor from '@/example/seletorExp';
import Header from '@/example/header';
import Accordion from '@/example/accordion';
import Layout from '@/example/layout';
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/button',
    name: 'Button',
    component: Button
  }, {
    path: '/Header',
    name: 'Header',
    component: Header
  }, {
    path: '/layout',
    name: 'Layout',
    component: Layout
  }, {
    path: '/accordion',
    name: 'Accordion',
    component: Accordion
  }, {
    path: '/seletor',
    name: 'Seletor',
    component: Seletor
  }]
});