<style lang="less" scoped>
.footer {
    position: fixed;
    z-index: 999;
    bottom: 0;
    color: #fff;
    background: #000;
    width: 100%;
}
.footer ul{
    display: flex;
    width: 100%;
}
.footer ul li{
    flex: 1;
    text-align: center;
    list-style: none;
    line-height: 44px;
}
 
</style>
<template>
    <div class="footer">
        <ul>
            <slot></slot>           
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {

    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }
}
</script>
