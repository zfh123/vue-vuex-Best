<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}


.slide-enter,
.slide-leave-to {
    transform: translate3d(100%, 0, 0);
}

.top {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    height: 0;
    top: -38px;
    background: #222;
    z-index: 999;
}

.top-header {
    height: 500px;
    width: 100%;
    background: #222;
    position: relative;
    top: 38px;
}

.top-header .back {
    position: absolute;
    top: 10px;
    left: 10px;
    color: yellow;
}
</style>
<template>
    <transition name="slide">
        <div class="top" style="height:100%">
            <div class="top-header">
                <div class="back" @click="back">back</div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        back() {
            this.$router.back()
        },
    }

}
</script>
