import Vue from 'vue';
import App from './App';
import router from './router';

import commaFilter from '@/filters/comma-filter';

import 'bootstrap/dist/css/bootstrap.css';
import '@/style.css';

Vue.config.productionTip = false;

Vue.filter('commas', commaFilter);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
