import Vue from 'vue';
import Vuex from 'vuex';

import footer from './modules/footer';
import banners from './modules/banners';
import header from './modules/header';
import products from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        footer,
        banners,
        header,
        products
    }
})

export default store;