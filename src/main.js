// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';

import Row from '@/components/row';
import Col from '@/components/col';
import Button from '@/components/button';
import Header from '@/components/header';
import Accordion from '@/components/accordion/group';
import AccordionItem from '@/components/accordion/item';
import Dialog from '@/components/dialog';
import Selection from '@/components/selection';
import Radio from '@/components/radio';
import RadioItem from '@/components/radio/item';
import CheckBox from '@/components/checkBox';
import CheckBoxItem from '@/components/checkBox/item';
import Popup from '@/components/popup';
import Loading from '@/components/loading';
import Progress from '@/components/progress';
import Steps from '@/components/steps';
import Step from '@/components/steps/step';
import Message from '@/components/message';

Vue.component('loli-header', Header);
Vue.component('loli-button', Button);
Vue.component('loli-row', Row);
Vue.component('loli-col', Col);
Vue.component('loli-accordion', Accordion);
Vue.component('loli-accordion-item', AccordionItem);
Vue.component('loli-dialog', Dialog);
Vue.component('loli-selection', Selection);
Vue.component('loli-radio', Radio);
Vue.component('loli-radio-item', RadioItem);
Vue.component('loli-checkbox', CheckBox);
Vue.component('loli-checkbox-item', CheckBoxItem);
Vue.component('loli-popup', Popup);
Vue.component('loli-loading', Loading);
Vue.component('loli-progress', Progress);
Vue.component('loli-steps', Steps);
Vue.component('loli-step', Step);
Vue.component('loli-message',Message);

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});