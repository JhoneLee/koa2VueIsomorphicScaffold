<template>
  <div>
    <h1>Layout<i>嵌套</i></h1>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name:'Layout',
    components: {

    },
    computed:{
       
    },
    created(){
        
       
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
  h1 {
    background-color: #4e4e4e;
    color:red;
    i{
       color:black;
    }
  }
</style>