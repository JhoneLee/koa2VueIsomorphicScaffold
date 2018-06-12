/*
* @Author: liyunjiao
* @Date:   2018-06-05 17:26:40
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 17:58:20
*/

import Home from './page/home';
import Detail from './page/detail';
import Layout from './page/layout';
import Children1 from './page/other/children1';
import Children2 from './page/other/children2';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home, name:'home'},
        { name:'detail',path: '/detail/:pid', component: Detail },
        {
            path:'/other',
            component:Layout,
            children:[
                {path:'children1',component:Children1,name:'children1'},
                {path:'children2',component:Children2,name:'children2'}
            ]
        }
    ]
})