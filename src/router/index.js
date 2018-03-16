import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Layout from '@/example/layout';
import Accordion from '@/example/accordion';
import Selection from '@/example/selection';
import Radio from '@/example/radio';
import CheckBox from '@/example/checkBox';

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
        }
    ]
});