<style>
.tabscroll {
    background: #222;
}

.topNav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

.clearfix {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #bbbbbb;
}

.clearfix li {
    flex: 1;
    display: block;
    text-align: center;
    padding: 10px 0;
    color: #5f646e;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.hd .actives {
    color: #d42626;
    border-color: #d42626;
    z-index: 100;
    border-bottom: 2px solid #0a8ddf;
}

.tab-scroll {
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 38px;
}

.tab-scroll li {
    text-align: center;
    line-height: 80px;
    color: grey;
    border-bottom: 1px solid #CCC;
    font-size: 20px;
}

.tab-scroll-list {
    height: 100%;
    overflow: hidden;
}
</style>
<template>
    <div class="tabscroll">
        <div class="topNav" ref="topHeight">
            <div class="hd">
                <ul class="clearfix">
                    <li v-for="(item, index) of listTab" :class="{actives:selected==index}" @click="change(index)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="tab-scroll" ref="searchList">
            <v-scroll :data="topList" :api="api" class="tab-scroll-list tab" :pullup="pullup" @scrollToEnd="getMore">
                <ul>
                    <li class="list" v-for="item in topList">
                        <img width="100" height="100" :src="item.picUrl" />
                    </li>
                </ul>
            </v-scroll>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listTab: ['歌手', '歌曲', '排行榜'],
            selected: 0,
            list: [1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9, 0, 87, 5, 5, 4, 35],
            topList: [],
            url: '',
            pullup: true,
            page: 1,
            api:1
        }
    },
    created() {
        this.getsongList();
    },
    methods: {
        change(index) {
            this.selected = index;
            console.log(this.selected)
            if (index === 0) {//歌手列表
                this.url = confing.api.singerList;
            } else if (index === 1) {//歌曲列表
                this.url = confing.api.songList;
            } else {//排行榜列表
                this.url = confing.api.rankList;
            }
            this.page = 1;
            this.topList = [];
            this.api = index;
            this.getsongList();
        },
        getsongList() {
            var $this = this;
            console.log('page=' + $this.page);
            if (!$this.url) {
                this.url = confing.api.singerList;
            }
            this.axios.get($this.url).then((response) => {

                if (response.data.code === 0) {

                    $this.topList = response.data.data.topList
                }
            })

        },
        getMore() {

            var $this = this;
            $this.page++;
            console.log('page=' + $this.page)
            this.axios.get($this.url).then((response) => {

                if (response.data.code === 0) {
                    //$this.topList = response.data.data.topList;
                    var left = response.data.data.topList;
                    $this.topList = $this.topList.concat(left);
                    console.log($this.topList)
                }
            })
        }
    }
}
</script>
