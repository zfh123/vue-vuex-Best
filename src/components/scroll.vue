
<style>

</style>

<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: null
        },
        api: {
            type: Number,
            default: 9
        },
        pullup: {
            type: Boolean,
            default: false
        },
        load: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }
    },
    mounted() {
        setTimeout(() => {
            this._initScroll()
        }, 20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            })

            if (this.listenScroll) {
                let me = this
                this.scroll.on('scroll', (pos) => {
                    me.$emit('scroll', pos)
                })
            }

            if (this.load) {
                console.log('load事件');
                var $this = this;
                // 滑动中
                this.scroll.on('scroll', (position) => {
                    console.log(position.y)
                    if (position.y > 30) {
                        console.log('释放立即刷新');
                        $this.$emit('toplist')
                    }
                })
                // 滑动结束
                this.scroll.on('touchend', (position) => {
                    if (position.y > 30) {
                        console.log('下拉刷新');
                        setTimeout(function () {
                            $this.$emit('upList')
                        }, 1000);

                    }
                })
            }

            if (this.pullup) {
                this.scroll.on('scrollEnd', (position) => {

                    if (this.scroll.y >= 1) {
                        console.log('下拉刷新')
                        this.$emit('scrollToTop')
                    }
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        console.log(this.scroll.y - this.scroll.maxScrollY - 50)
                        console.log('上拉加载更多')
                        this.$emit('scrollToEnd')
                    }
                })
            }

            if (this.beforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScroll')
                })
            }
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.refresh();
            }, this.refreshDelay)
        },
        api() {
            setTimeout(() => {
                this.scrollTo(0, 0);
            }, this.refreshDelay)
        }
    }
}

</script>
