<style>
.input {
    margin: 15px auto;
    width: 80%;
    display: block;
    border: none;
    border: 1px solid;
    line-height: 31px;
    text-indent: 15px;
}
</style>
<template>
    <div class="bankcard">
        <input id="input" class="input" ref="div" v-model="query" :placeholder="placeholder" type="text" value="">
        <button @click="bank()">按钮</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            placeholder: '请输入您的储蓄卡号',
            query: '',
            bankcar:''
        }
    },
    computed:{
        
    },
    created() {
        this.bank();
    },
    watch: {
        query(newdata) {
            var $this = this;
            if (newdata.length === 4) {
                $this.query = $this.query + ' '
            } else if (newdata.length === 9) {
                this.query = this.query + ' '
            } else if (newdata.length === 14) {
                this.query = this.query + ' '
            } else if (newdata.length === 19) {
                this.query = this.query + ' '
            }
        }
    },
    methods: {
        bank() {

            console.log(this.query)
            var arr = this.query.split(' ')
            console.log(arr.join(""))
        }
    }
}
</script>
