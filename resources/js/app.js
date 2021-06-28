/**
 * Libraries
 */
import Vue from "vue";
import './bootstrap';
import VueSweetalert2 from "vue-sweetalert2";
import Loading from 'vue-loading-overlay';
import VueCarousel from 'vue-carousel';
import vSelect from 'vue-select';
import VueGlide from 'vue-glide-js';

/**
 * Components
 */
import Vuetify from "./plugins";
import App from './App.vue';
import store from "./store";
import router from './routes';

/**
 * Styles
 */
import './assets/scss/style.scss';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-select/dist/vue-select.css';
import 'vue-glide-js/dist/vue-glide.css';

/**
 * Vue Uses
 */
Vue.use(VueSweetalert2);
Vue.use(VueCarousel);
Vue.use(VueGlide);
Vue.use(Loading, {
    backgroundColor: '#ffffff50',
    color: '#603e85',
    loader: 'spinner'
});

/**
 * Vue Component
 */
Vue.component('v-select', vSelect);

/**
 * Render
 */
new Vue({
    render: h => h(App),
    vuetify: Vuetify,
    store: store,
    router: router
}).$mount('#app');