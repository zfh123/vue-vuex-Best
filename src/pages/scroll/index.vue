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
</style>
<template>
    <div class="scroll">
        <v-header title="scroll">
            <router-link slot="left" to="/scroll">scroll</router-link>
            <router-link slot="right" to="/example">example</router-link>
        </v-header>
        <div class="rank">
            <v-scroll :data="topList" class="toplist" ref="toplist">
                <ul>
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
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            topList: [],
        }
    },
    created() {
        var $this =this;
        setTimeout(function () {
            $this.getsongList();
        }, 1000);

    },
    methods: {
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
