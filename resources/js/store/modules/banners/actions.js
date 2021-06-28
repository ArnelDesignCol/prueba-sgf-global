import axios from "axios"
import Vue from 'vue';

export default {
    getBanners({ context, commit }, data) {
        let loader = Vue.$loading.show();
        axios.post('/api/banners/getBanners', data)
            .then((res) => {
                loader.hide();
                if (res.data.transaction.status == true) {
                    commit('setBanner', res.data.data);
                } else {
                    Vue.swal({
                        icon: 'error',
                        text: res.data.message.content
                    })
                }
            }).catch((err) => {
                loader.hide();
                Vue.swal({
                    icon: 'error',
                    text: 'Ocurrio un problema al momento de obtener los banners de esta ciudad'
                })
            })
    }
}