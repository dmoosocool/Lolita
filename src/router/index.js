import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Header from '@/example/header';
import Accordion from '@/example/accordion';
import Selection from '@/example/selection';
import Radio from '@/example/radio';
import CheckBox from '@/example/checkBox';

import Layout from '@/example/layout';
import Popup from '@/example/popup';
import Loading from '@/example/loading';
import Progress from '@/example/progress';
import Step from '@/example/step';
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
  },
  {
    path: '/Header',
    name: 'Header',
    component: Header
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
  },
  {
    path: '/selection',
    name: 'Selection',
    component: Selection
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/checkBox',
    name: 'CheckBox',
    component: CheckBox
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  }, {
    path: '/progress',
    name: 'Progress',
    component: Progress
  }, {
    path: '/step',
    name: 'Step',
    component: Step
  }
  ]
});