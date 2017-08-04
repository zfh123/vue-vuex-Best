<style>
body {
    background: #222;
}

.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<template>
    <div class="example">
        <v-header title="example">
            <router-link slot="left" to="/iscroll">scroll</router-link>
            <router-link slot="right" to="/watch">watch</router-link>
        </v-header>
        <v-topMain>
    
        </v-topMain>
        <div class="loading-container" v-show="!discList.length">
            <v-loading></v-loading>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            discList: [],
        }
    }
}
</script>
