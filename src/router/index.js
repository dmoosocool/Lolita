import Vue from 'vue';
import Router from 'vue-router';
import UiInfo from '@/components/UiInfo';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'UiInfo',
      component: UiInfo
    }
  ]
});
