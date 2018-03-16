import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Seletor from '../components/seletor/seletor';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  }, {
    path: '/seletor',
    name: 'Seletor',
    component: Seletor
  }
  ]
});