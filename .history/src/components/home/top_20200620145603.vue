<template>
<div>
    <div>
        <div class="top df">

            <div class="top_left  f1  df">

               
                    <div @click="gotocity" v-if="(city!='')" class="top_left_left f15 df   f-column j-center t-r "> {{city}}</div>
                    <div v-if="(city=='')" class="top_left_left f15 df   f-column j-center t-r "> 定位中.</div>
                    <div @click="gotocity" v-if="city!=''" class="top_left_left f15 df   f-column j-center t-r "> {{name}}</div>
                
               
               

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

        name: String,

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
        getSomeCity() {
            let _this = this
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })

                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)

                function onComplete(data) {
                    // data是具体的定位信息
                    _this.city = data.addressComponent.city
                    console.log(data);
                }

                function onError(data) {
                    // 定位出错
                }
            })

        }

    },
    mounted() {
        this.getSomeCity()
        console.log(this.name);
        console.log(555);
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
