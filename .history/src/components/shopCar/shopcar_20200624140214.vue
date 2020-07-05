<template>
<div>
    <div class="top  h40 ccc">
        <div>购物车</div>
    </div>
    <div>

        <div>
            <img class="pic" src="../../assets/order.gif">
        </div>

        <div class="text1">
            您的购物车还是空的
        </div>
        <div class="text2">
            去购物
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        sonme() {
            export function debounce(fn, delay) {
                // 记录上一次的延时器
                var timer = null;
                var delay = delay || 200;
                return function () {
                    var args = arguments;
                    var that = this;
                    // 清除上一次延时器
                    clearTimeout(timer)
                    timer = setTimeout(function () {
                        fn.apply(that, args)
                    }, delay);
                }
            }
        }

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.top {

    border-bottom: 2px solid rgb(201, 198, 198);
}

.pic {

    width: 374px;

}
</style>
