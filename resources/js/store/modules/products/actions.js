import axios from "axios";
import Vue from "vue";

export default {
    getProducts({ context, commit }, data){
        let loader = Vue.$loading.show();
        axios.post('/api/products/getProducts', data)
            .then((res) => {
                loader.hide();
                if (res.data.transaction.status == true) {
                    commit('setProducts', res.data.data);
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
                    text: 'Ocurrio un problema al momento de obtener los productos de esta ciudad'
                })
            })
    }
}