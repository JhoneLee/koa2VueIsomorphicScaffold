/*
* @Author: liyunjiao
* @Date:   2018-06-11 14:13:31
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 17:27:28
*/


let stateBase = {
    homeList:{
        subjects:[]
    }
};
export default {
    state:stateBase,
    getters:{
        homeList(state){
            console.log(state,'getter');
            return state.homeList;
        }
    },
    mutations:{
        HOME_SUCCESS(state,res){
            console.log('success',res);
            state.homeList = res;
        },
        HOME_ERROR(state,error){
            console.log('error',error);
            state.homeList = stateBase;
        }
    },
    ations:{
        HOME_SUCCESS({commit}){
            commit('HOME_SUCCESS');
        }
    }
}