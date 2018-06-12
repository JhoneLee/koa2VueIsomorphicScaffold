/*
* @Author: liyunjiao
* @Date:   2018-06-05 16:20:53
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 16:33:43
*/

import Vue from "vue";
import App from './App';
import router from './routes';
import store from './vuex/store';

new Vue({
    el:'#app',
    router,
    store,
    render(h){
        return h(App)
    }
});