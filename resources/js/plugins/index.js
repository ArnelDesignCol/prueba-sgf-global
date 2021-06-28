import Vue from 'vue';
import Vuetify from 'vuetify';

// Vue Uses
Vue.use(Vuetify);

// Options
const Options = {
    theme: {
        themes: {
            light: {
                primary: "#603e85"
            }
        }
    },

    icons: {
        iconfont: 'fa'
    }
};

// Export Vuetify
export default new Vuetify(Options);