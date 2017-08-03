<style>
.searchBox {
    color: #000;
    line-height: 25px;
    position: relative;
}

.input {
    margin: 15px auto;
    width: 80%;
    display: block;
    border: none;
    border: 1px solid;
    line-height: 31px;
    text-indent: 15px;
}

.xBt {
    position: absolute;
    right: 48px;
    top: 2px;
}
</style>
<template>
    <div class="searchBox">
        <input class="input" type="text" v-model="query" :placeholder="placeholder">
        <span @click="clearData" v-show="query" class="xBt">x</span>
    </div>
</template>
<script>
export default {
    props:{
        placeholder:{
            type:String,
            default:'搜索歌曲,歌手'
        }
    },
    data() {
        return {
            serchTxt: '',
            query:''
        }
    },
    methods:{
        clearData(){
            this.query = '';
        },
        setQuery(query){
            this.query = query;
        }
    },
    created(){
        this.$watch('query',function(newQuery){
            this.$emit('query',newQuery);
        })
    }
}
</script>
