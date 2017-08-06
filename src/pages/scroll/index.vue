<style>
.rank {
    position: fixed;
    width: 100%;
    top: 38px;
    bottom: 0;
    background: #222;
}

.toplist {
    height: 100%;
    overflow: hidden;
}

.items {
    display: flex;
    margin: 0 20px;
    padding-top: 20px;
    height: 100px;
}

.items:last-child {
    padding-bottom: 20px;
}

.icon {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
}

.songlist {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
    height: 100px;
    overflow: hidden;
    background: #333;
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
}


.song {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 26px;
}


.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.top-tip {
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin-top: -30px;
}

.alert {
    position: fixed;
    top: 38px;
    color: #222;
    line-height: 40px;
    text-align: center;
    width: 100%;
    background: #fff;
    opacity: 0.5;
}
</style>
<template>
    <div class="scroll">
        <v-header title="scroll">
            <router-link slot="left" to="/tabScroll">tabScroll</router-link>
            <router-link slot="right" to="/example">example</router-link>
        </v-header>
        <div class="rank">
            <v-scroll :data="topList" @upList="upList" @toplist="topLists" class="toplist" ref="toplist" :pullup="pullup" :load="load" :listen-scroll="listenScroll">
                <ul>
                    <div class="top-tip" ref="toptip" v-text="uprefish"></div>
                    <li @click="selectItem(item)" class="items" v-for="item in topList">
                        <div class="icon">
                            <img width="100" height="100" :src="item.picUrl" />
                        </div>
                        <ul class="songlist">
                            <li class="song" v-for="(song,index) in item.songList">
                                <span>{{index + 1}}</span>
                                <span>{{song.songname}}-{{song.singername}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="loading-container" v-show="!topList.length">
                    <v-loading></v-loading>
                </div>
            </v-scroll>
            <div v-show="alerts" class="alert" ref="alert">刷新成功</div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            topList: [],
            pullup: true,
            listenScroll: true,
            load: true,
            uprefish: '下拉刷新',
            alerts:false
        }
    },
    created() {
        var $this = this;
        setTimeout(function () {
            $this.getsongList();
        }, 1000);

    },
    methods: {
        topLists() {
            console.log('父组件下拉刷新')
            this.uprefish = '释放立即刷新';
        },
        upList() {
            console.log('滑动结束')
            this.uprefish = '下拉刷新';
            this.alerts = true;
            var $this =this;
            setTimeout(function() {
                $this.alerts = false;
            }, 1000);
        },
        getsongList() {
            this.axios.get(confing.api.songList).then((response) => {

                if (response.data.code === 0) {
                    console.log(response.data.data.topList)
                    this.topList = response.data.data.topList

                }
            })
        },
        selectItem(item) {
            console.log(item.id)
            this.$router.push({
                path: `/scroll/${item.id}`
            })
            //this.setTopList(item)
        },
    }
}
</script>
