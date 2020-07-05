<template>
<div>

    <div>
        <top @send='send'></top>
    </div>
<div>
</div>
</div>
</template>

<script>
import {
    Toast
} from 'vant'

import BScroll from 'better-scroll'
import top from '../components/home/top.vue'
import banner from '../components/home/banner.vue'
import homecata from '../components/home/homecata.vue'
import homere from '../components/home/homere.vue'
import floor1 from '../components/home/floor1.vue'
import floor2 from '../components/home/floor2.vue'
import floor3 from '../components/home/floor3.vue'
import hotgoods from '../components/home/hotgoods.vue'

export default {
    name: '',
    props: {},
    components: {
        top,
        banner,
        homecata,
        homere,
        floor1,
        floor2,
        floor3,
        hotgoods,

    },
    data() {
        return {
            isLoading: false,
            slides: [],
            category: [],
            pic: '',
            recommend: [],
            floor11: [],
            floor22: [],
            floor33: [],
            floorName: null,
            hotgoodss: [],
            searchData: '',

        }
    },
    methods: {
        send(data) {
            this.searchData = data
        },
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;

            }, 1000);
        },
        getRecommend() {
            this.$api.getRecommend().then(res => {

                this.slides = res.data.slides
                // console.log(this.slides);
                this.category = res.data.category
                this.pic = res.data.advertesPicture.PICTURE_ADDRESS
                this.recommend = res.data.recommend
                this.floor11 = res.data.floor1
                this.floor22 = res.data.floor2
                this.floor33 = res.data.floor3
                this.floorName = res.data.floorName
                this.hotgoodss = res.data.hotGoods
                // this.$store.commit('setListCategory', this.category)
                localStorage.setItem('somedata', JSON.stringify(this.category))

            }).catch(err => {
                console.log(err)
            })
        }

    },
    mounted() {
        //   this.cityname =  this.$route.params.cityname
        //   console.log(this.cityname);
        new BScroll(this.$refs.container, {
            scrollY: true,
            click: true
        })

        this.getRecommend()

    },
    watch: {

    },
    computed: {
        // listCategory(){
        //     return this.$store.state.listCategory
        // }

    }
}
</script>

<style lang="scss" scoped>
.top_left {

    background: #F0F0EE;
}

.container {
    overflow: hidden;
    height: 556px;
}
</style>
