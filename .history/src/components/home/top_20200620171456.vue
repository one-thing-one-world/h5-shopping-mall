<template>
<div>
    <div>
        <div class="top df">

            <div class="top_left  f1  df">

                <div @click="gotocity" v-if="position_city!=''" class="top_left_left f15 df f-column j-center t-r">
                    {{position_city}}
                </div>
                <div v-if="position_city==''" class="top_left_left f15 df   f-column j-center t-r "> 定位中.</div>

                <div class="top_left_right re ccc">
                    <van-icon name="arrow-down" />
                </div>

            </div>
            <div class="f3">
                <van-search v-model="value" shape="round" background="#F0F0EE" placeholder="请输入搜索关键词" />
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {

        cityname: {
            type:String
        }

    },
    components: {

    },
    data() {
        return {
            city: '',
            value: '',

        }
    },
    methods: {
        gotocity() {
            this.$router.push({
                name: 'city'
            })
            this.$store.commit('setPosition_city', this.city)
        },
        
       getget(){
           if(){
               
           }
       }

    },
    mounted() {
        this.getSomeCity()
        
    },
    watch: {

    },
    computed: {
        position_city() {
            return this.$store.state.position_city
        }
    }
}
</script>

<style lang="scss" scoped>
.top_left {

    background: #F0F0EE;
}
</style>
