import states from './states';
import mutations from './mutation';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state: states,
    mutations,
    actions,
    getters
}