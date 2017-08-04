<style lang="less" scoped>
.Account {
    text-align: center;
    line-height: 165px;
    background: #0099FF;
    color: #fff;
    font-size: 27px;
}
.jies{
   background: #007ACC;
   display: flex; 
}
.jies .items{
    flex: 1;
    padding: 6px 0;
    font-size: 15px;
}
.jies .items span{
    display: block;
    line-height: 25px;
    color: #fff;
    text-align: center;
}
</style>
<template>
    <div class="top-main">
        <!-- <countTo class="Account" :startVal='0' :endVal='account.toFixed(2)' :duration='3000'></countTo> -->
         <div class="Account" v-text="'￥'+account.toFixed(2)"></div> 
        <div class="jies">
            <div class="items">
                <span>累计收益(元)</span>
                <span>123.00</span>
            </div>
            <div class="items">
                <span>万份收益(元)</span>
                <span>1.0785</span>
            </div>
            <div class="items">
                <span>七日年化(元)</span>
                <span>5.054</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
// import countTo from 'vue-count-to'
export default {
    data(){
        return{
            account:0.00,
            leij:0.00
        }
    },
    // components: { countTo },
}
</script>
