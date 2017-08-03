<style>
.item {
    clear: both;
}
</style>
<template>
    <div class="item">
        item</div>
</template>
<script>
export default {
    props: {
        query: {
            type: String,
            default: ''
        }
    },
    methods:{

    },
    watch:{
        query(){
            console.log('订单列表获取到数据变化开始加载数据')
        }
    }
}
</script>
