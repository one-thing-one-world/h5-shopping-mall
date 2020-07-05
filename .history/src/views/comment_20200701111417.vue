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

            <div class="container_img_box  df">
                <div class="img_box m-l-20"><img :src="oneItem.image_path" alt=""></div>

                <div class="  f-column j-around m-l-30 ">
                    <div>
                        商品评分
                    </div>
                    <div>
                        <div class="df star">
                            <van-rate v-model="value" :count="5" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div>

            <div>
                <textarea class="textbox">
                            在w3school，你可以找到你所需要的所有的网站建设教程。
                </textarea>
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
            value: 0,
            oneItem: [],
            flag: -1,

        }
    },
    methods: {

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
.textbox{
    width: 372px;
    height:100px;
    resize:none;
    border: n;
}
.yellowColor {
    color: yellow;
}

.container_img_box {
    padding: 16px 0px 30px 0px;
    border-bottom: 1px solid rgb(194, 189, 189);
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
