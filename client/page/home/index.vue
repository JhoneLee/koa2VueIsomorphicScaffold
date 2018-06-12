<template>
  <div>
    <Title/>
    <h1>我是首页</h1>
    <h2>嵌套路由跳转</h2>
    <router-link :to="{ name: 'children1'}">children1</router-link>
    <router-link :to="{ name: 'children2'}">children2</router-link>
    <h2 v-if="homeList.subjects.length>0">电影列表</h2>
    <ul>
        <li v-for="item in homeList.subjects">
            <router-link :to="{ name: 'detail', params: { pid: item.id }}">{{item.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import Title from 'Components/title';
import {mapGetters,mapActions} from 'vuex';
export default {
    name:'Home',
    components: {
        Title
    },
    computed:{
       ...mapGetters(['homeList'])
    },
    beforeCreate(){
        console.log('init Events & lifecycle complete!');
    },
    created(){
        console.log('实例已经创建完成之后被调用');
        this.fetchData({
            type:'HOME',
            api:'movies',
            params:{
                id:'abcdefg'
            }
        });
    },
    beforeMount(){
        console.log('在挂载开始之前被调用');
    },
    mounted(){
        console.log('实例已挂载');
    },
    beforeUpdate(){
        console.log('数据更新前');
    },
    updated(){
        console.log('数据更新后');
    },
    beforeDestroy(){
        console.log('组件销毁之前');
    },
    activated(){
        console.log('keep-alive组件激活时调用');
    },
    deactivated(){
        console.log('keep-alive组件停用时调用');
    },
    destroyed(){
        console.log('组件销毁之后');
    },
    methods:{
        ...mapActions(['fetchData'])
    }
}
</script>

<style lang="less" scoped>
  h1 {
    background-color: #888;
    color:white;
  }
</style>