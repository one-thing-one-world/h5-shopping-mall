<template>
<div>

    <div>

        <div class="top df h50">
            <div class="ccc text1">
                <div @click="goback">
                    <van-icon name="arrow-left" />
                </div>
            </div>

            <div class="ccc w300 text2">评价中心</div>
        </div>

        <div>

            <div class="container_img_box r1 df">
                <div class="img_box m-l-20"><img :src="oneItem.image_path" alt=""></div>

                <div class="r1 f-column j-around m-l-20">
                    <div>
                        商品评分
                    </div>
                    <div >
                        <div class="df  b1">
                            <div class="m-l-10 fs20" @click="choose" v-for="(item,index) in fiveStar" :key="index">

                            <div :class="{'yellowColor':flag===index}">
                                <van-icon :name="item.name" />
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

            </div>

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
            oneItem: [],
            flag:,
            fiveStar: [
               

                {
                    name: 'star-o'
                },
                {
                    name: 'star'
                },
                {
                    name: 'star-o'
                },
                {
                    name: 'star-o'
                },
                {
                    name: 'star-o'
                },
            ]
        }
    },
    methods: {
        choose(){
            
        },

        goback() {
            history.go(-1)
        },

        grtComment(id, rate, content, anonymous, _id, order_id, image) {

        },
        getOrderNum() {
            this.$api.getOrderNum().then(res => {

                console.log(res);

            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {

        this.getOrderNum()
        this.oneItem = JSON.parse(this.$route.query.oneItem)
        console.log(this.oneItem);

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.yellowColor{
    color:yellow;
}
.container_img_box{
    padding:10px 0px;
}
.img_box {
    width: 80px;

}

.img_box img {
    width: 100%;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}
</style>
