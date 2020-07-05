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
                <textarea v-model="value2" placeholder=" 请输入评价:" class="textbox">

                </textarea>
            </div>

        </div>

        <div>

            <div>
                <van-field name="uploader" label="">
                    <template #input>
                        <van-uploader v-model="uploader" />
                    </template>
                </van-field>
            </div>
        </div>

        <div>
            <div class="df">
                <div class="m-l-10">
                    <van-checkbox v-model="checked"></van-checkbox>
                </div>
                <div class="m-l-10">匿名评价</div>

            </div>
        </div>

        <div class="submit_box ccc">
            <div class="submit  ccc">提交</div>
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
            uploader: [{
                url: 'https://img.yzcdn.cn/vant/leaf.jpg'
            }],
            value: 0,
            value2: '',
            oneItem: [],
            flag: -1,
            checked: false,

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
        },
        submit() {
            // /goodsOne/comment
            // 参数:
            // id: 商品cid
            // rate: 分数
            // content: 内容
            // anonymous: 是否匿名 
            // _id: 商品的_id
            // order_id: 商品的order_id
            // image: []
            //grtComment(id, rate, content, anonymous, _id, order_id, image)
            this.gettComment(this.oneItem.cid,this.value,this.val).then(res => {
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
.submit_box {
    margin-top: 40px;
}

.submit {
    width: 280px;
    height: 50px;
    font-size: 20px;
    background: rgb(37, 216, 37);
    color: white;
    border-radius: 20px;
}

.textbox {
    width: 372px;
    height: 180px;
    resize: none;
    border-top: 0px solid rgb(190, 185, 185);
    border-bottom: 1px solid rgb(190, 185, 185);
    border-left: 0px solid rgb(190, 185, 185);
    border-right: 0px solid rgb(190, 185, 185);
}

.yellowColor {
    color: yellow;
}

.container_img_box {
    padding: 16px 0px 30px 0px;
    border-bottom: 1px solid rgb(187, 182, 182);
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
