<template>
  <div>
    <h2>children 2</h2>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name:'children2',
    components: {
        
    },
    computed:{
       
    },
    created(){
        console.log('实例已经创建完成之后被调用');
       
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
  h2 {
    background-color: #888;
    color:white;
  }
</style>