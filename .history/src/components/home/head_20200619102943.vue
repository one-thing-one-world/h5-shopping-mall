<template>
<div>
    <div class="top df">
        <div class="top_left  f1  df">

            <div @click="gotocity" v-if="city!==''" class="top_left_left f15 df   f-column j-center t-r "> {{city}}</div>
            <div @click="gotocity" v-if="city===''" class="top_left_left f15 df   f-column j-center t-r "> 定位中.</div>

            <div class="top_left_right re ccc">
                <van-icon name="arrow-down" />
            </div>

        </div>
        <div class="f3">
            <van-search v-model="value" shape="round" background="#F0F0EE" placeholder="请输入搜索关键词" />
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

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
