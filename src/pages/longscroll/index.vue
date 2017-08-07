<style>
.rank {
    position: fixed;
    top: 38px;
    bottom:0;
    width: 100%;
}

.toplist {
    overflow: hidden;
    height: 100%;
}

ul,
li {
    list-style: none;
}

.items {
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid yellow;
}
</style>
<template>
    <div class="longscrolls">
        <v-header title="longScroll"></v-header>
        <div class="rank">
            <v-scroll :data="list" class="toplist">
                <ul>
                    <li class="items" v-for="item in list" v-text="item"></li>
                </ul>
            </v-scroll>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        var $this = this;

        $this.init();

    },
    methods: {
        init() {
            this.list = [1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6, 7, 3, 2, 2, 1, 3, 5, 6, 7, 7, 8, 8]
        }
    }
}
</script>
