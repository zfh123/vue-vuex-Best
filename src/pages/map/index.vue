<style>
.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<template>
    <div class="map">
        <v-header title="地图">
            <router-link slot="left" to="/watch">watch</router-link>
            <router-link slot="right" to="/">首页</router-link>
        </v-header>
    
        <div id="container"></div>
        <div class="loading-container" v-show="!lex">
            <v-loading></v-loading>
        </div>
        <!--main组件  -->
        <v-main :nav="nav" @text="text"></v-main>
        <!--footer组件  -->
        <v-footer>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </v-footer>
        <!-- <div id="panel"></div> 文字知道导航-->
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { getCommonData, common, comTest } from '../common/js/base'
export default {
    data() {
        return {
            lox: 0, //骑手经纬度
            loy: 0,
            lex: 0, //客户经纬度
            ley: 0,
            map: {},
            timer: null,
            nav: [1, 2, 3, 4, 5, 6],
        }
    },
    computed: {

    },
    created() {

    },
    // 离开该页面销毁自调函数
    beforeDestroy() {
        clearTimeout(this.timer)
    },
    watch: {//监控经纬度的变化
        lex() {

        }
    },
    mounted() {
        var $this = this;
        setTimeout(function () {
            $this.getUserLocation();
        }, 2000);

    },
    methods: {
        text(item) {
            console.log('text子组件传给父组件的通信其值为：' + item);
        },
        creatMap() {  //创建地图
            this.map = new AMap.Map("container", {
                resizeEnable: true,
                center: [this.lex, this.ley], //地图中心点
                zoom: 23 //地图显示的缩放级别
            });
        },
        //路线规划
        getMap() {
            //骑行导航
            var riding = new AMap.Riding({
                map: this.map,
                // panel: "panel"
            });
            //起点  模拟的经纬度
            //根据起终点坐标规划骑行路线          
            riding.search([this.lox, this.loy], [this.lex, this.ley]);//起点---终点（用户）  
            console.log('获取骑手-------实时路线');
        },
        // 得到骑手的位置
        getQSlocation() {
            var $this = this;//调取接口获取到的骑手的经纬度----实时获取
            $this.lox = '120.0902980000';
            $this.loy = '30.2870145000';
            $this.getMap();
            $this.timer = setTimeout(function () {
                $this.getQSlocation();
            }, 3000);
        },
        // 得到用户的位置
        getUserLocation() {
            var $this = this;//调取用户的经纬度调取接口---获取一次就可以
            $this.lex = '120.1111596823';
            $this.ley = '30.2853868556';
            $this.creatMap();
            $this.getQSlocation();

        }
    }
}
</script>


