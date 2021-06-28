import axios from "axios"
import Vue from 'vue';

export default {
    getCities({ context, commit }){
        let loader = Vue.$loading.show();
        axios.get('/api/complements/getCities')
        .then((res) => {
            loader.hide();
            if(res.data.transaction.status == true){
                commit('setCities', res.data.data)
            }else{
                Vue.swal({
                    icon: 'error',
                    text: res.data.message.content
                })
            }
        }).catch((err) => {
            loader.hide();
            Vue.swal({
                icon: 'error',
                text: 'Lo siento, ocurrio un problema al momento de obtener las ciudades.'
            })
        })
    }
}