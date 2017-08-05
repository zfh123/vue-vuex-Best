<style>
.txt {
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    font-weight: 900;
    clear: both;
}

.navmain {
    padding: 10px 20px;
}

.navmain li {
    float: left;
    background: #000;
    color: #fff;
    padding: 5px 10px;
    margin: 4px 5px;
    list-style: none;
    border-radius: 5px;
}

.scroll-list {
    clear: both;
    position: fixed;
    width: 100%;
    top: 96px;
    bottom: 44px;
}
</style>
<template>
    <div class="watch">
        <v-header title="watch">
            <router-link slot="left" to="/example">example</router-link>
            <router-link slot="right" to="/map">地图</router-link>
        </v-header>
        <!--把监听的事件通过query事件做出相应的处理  -->
        <v-searchBox @query="query" ref="searchBox">
    
        </v-searchBox>
        <div class="navmain" v-show="!querys">
            <ul>
                <li @click="addQuery(item)" v-for="item in stla" v-text="item"></li>
            </ul>
        </div>
        <!-- <div v-if="ox>5" v-text="ox" class="txt"></div> -->
        <!-- <v-item :query="querys"></v-item> -->
        <!--main组件  -->
        <!-- <v-main :nav="list" @text="text"></v-main> -->
        <div class="scroll-list" v-show="querys">
            <v-suggest :query="querys">
    
            </v-suggest>
        </div>
    
        <v-footer>
            <li>首页</li>
            <li>结算</li>
            <li>我</li>
        </v-footer>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            ox: 0,
            timers: null,
            list: ['大主宰', '莽荒纪', '青云志', '狼毒花', '花千骨'],
            stla: ['父亲', '爱', '清明雨上', '素颜', '不懂', '原生那个草', '告白气球', '如果我爱你', '同学会'],
            querys: ''
        }
    },
    computed: {
        _OX: function () {
            if (this.ox > 4) {
                // console.log('_OX----'+this.ox);
            }
        }
    },
    watch: {//监控ox值得变化
        ox: {
            handler: function (nowVal, oldVal) {
                // console.log('nowVal-----'+nowVal);
                // console.log('oldVal-----'+oldVal);
                if (nowVal != oldVal) {
                    this._init();
                }
            },
            deep: true
        }
    },
    // 离开该页面销毁自调函数
    beforeDestroy() {
        clearTimeout(this.timers)
    },
    created() {

    },
    mounted() {
        this.init();
    },
    methods: {
        addQuery(query) {
            this.$refs.searchBox.setQuery(query);
        },
        text(item) {
            // console.log('text子组件传给父组件的通信其值为：'+ item);
        },
        _init() {
            // console.log('ox调用后的值-------'+this.ox);
        },
        init() {
            var $this = this;
            $this.ox += 1;
            // console.log('init------' + $this.ox)
            $this.timers = setTimeout(function () {
                $this.init();
            }, 2000)
        },
        query(newquery) {//通过该事件监听子组件的事件以及做出相应的处理
            console.log('获取到子组件传递过来的值' + newquery)
            this.querys = newquery;
            this.getData()
        },
        getData() {
            console.log(this.querys)
        }
    }
}
</script>
