<template>
    <div class="loading">
        <img width="24" height="24" src="../common/img/loading.gif">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    props: {
        title: {
            type: String,
            default: '正在载入...'
        }
    }
}
</script>
<style>
@import "../common/css/base.css" ;
.loading {
    width: 100%;
    text-align: center;
}

.desc {
    line-height: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
}
</style>
