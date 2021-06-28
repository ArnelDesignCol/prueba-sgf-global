import axios from "axios"
import Vue from 'vue';

export default {
    saveEmail({ context, commit }, data){
        let loader = Vue.$loading.show();
        axios.post('/api/users/saveEmail', data)
        .then((res) => {
            loader.hide();
            if(res.data.transaction.status == true){
                Vue.swal({
                    icon: 'success',
                    text: res.data.message.content
                });

                commit('setEmail', '')
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
                text: 'Lo siento, ocurrio un problema al momento de registrarte a nuestras promociones y lanzamientos.'
            })
        })
    }
}