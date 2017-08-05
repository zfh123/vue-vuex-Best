<style lang="less" scoped>
.suggest {
    height: 100%;
    overflow: hidden;
}

.suggest-list {
    padding: 0 30px;
}

.suggest-item li {
    color: green;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #000;
}
</style>
<template>
    <v-scroll class="suggest" :data="result" :pullup="pullup" @scrollToEnd="searchMore">
        <ul class="suggest-item">
            <li class="item" v-for="item in result" v-text="item.name"></li>
        </ul>
    </v-scroll>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: {
        query: {
            type: String,
            default: '',

        }
    },

    data() {
        return {
            page: 1,
            result: [],
            pullup: true,
            beforeScroll: true,
        }
    },
    created() {

    },
    methods: {
        search() {
            console.log(this.page)
            var $this = this;
            this.axios.get(confing.api.lost4).then((response) => {
                console.log(response.data.items)
                if (response.data.code === 200) {
                    $this.result = response.data.items;

                }
            })
        },
        searchMore() {
            console.log('到底了');
        }
    },
    watch: {
        query() {
            console.log('scrollList组件获取到的值' + this.query);
            this.search();
        }
    }
}
</script>
