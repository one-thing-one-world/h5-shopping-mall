<template>
<div >

   
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item indicator-color="white" @click="gotoDetail(item.goodsId)" v-for="(item,index) in slides" :key="index">
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
        gotoDetail(a){


            this.$router.push({name:'detail',
                query:{
                    id:a
                }
            })
            cl

        
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

<style scoped lang='scss'>

</style>
