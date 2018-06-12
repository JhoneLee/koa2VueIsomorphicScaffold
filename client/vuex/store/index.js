/*
* @Author: liyunjiao
* @Date:   2018-06-08 15:55:40
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 15:02:34
*/

import Vuex from 'vuex';
import Vue from 'vue';
// import getters from '../getter';
// import Mutation from '../mutation';
import modules from '../module';
import actions from '../action';

Vue.use(Vuex);
export default new Vuex.Store({
    // getters,
    actions,
    modules
});
