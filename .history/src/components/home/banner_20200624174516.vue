<template>
<div >

   
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item indicator-color="white" @click="gotoDetail(item,index)" v-for="(item,index) in slides" :key="index">
                <img class="w375" :src="item.image" alt="">
            </van-swipe-item>

        </van-swipe>
   

</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {
        slides: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        gotoDetail(a,b){
            this

        }

    },
    mounted() {
        // new BScroll(this.$refs.container, {
        //     scrollX: true,
        //     click: true
        // })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
