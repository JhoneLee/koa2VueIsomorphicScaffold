<template>
    <div>
        <keep-alive>
            <router-view class="view"></router-view>
        </keep-alive>
    </div>
</template>
<script>
    export default {
        name: 'App'
    };
</script>