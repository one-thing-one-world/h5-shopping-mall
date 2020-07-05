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

        <div class="df m-t-20" v-if="oneItem">

            <div class="star ccc">
                <van-rate v-model="value" :count="5" />
            </div>
            <div class="time ccc">
                <div>{{oneItem.comment_time}}</div>
            </div>
        </div>

        <div class="content_box m-t-20 j-center" v-if="oneItem">
            <div class="contents ">{{oneItem.content}}</div>
        </div>

        <div class="pic_box m-t-20 j-center" v-if="oneItem">

            <div class="pic_box_container df a-center">
                <div>
                    <div class="pic"><img :src="oneItem.goods[0].image" alt=""></div>
                </div>

                <div class="pic_text m-l-10">
                    {{ oneItem.goods[0].name}}
                </div>

                <div class="m-l-20">
                    <div class="cart ccc" ><van-icon name="cart" /></div>
                </div>
            </div>

        </div>


    </div>
    <div class=" back_box j-center">
        <div @click="back" class="back ccc">返回</div>
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
            oneItem: null,

        }
    },
    methods: {
        goback() {
            this.$router.push({
                name: 'comments'
            })

        },
        back(){
            this.$router.push({name:'comments'})
        }
        addshop(){
            addShop() {
            if (this.users) {

                this.$api.getAddshopping(this.obj.id).then(res => {
                    this.getCard()
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
                this.getCard()
            } else {
                this.$checkLogin()
            }

        }
        }

    },
    mounted() {

        this.oneItem = JSON.parse(this.$route.query.oneItem)
        this.value = this.oneItem.rate
        console.log(this.oneItem);
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.text1{
    margin-left:20px;
}
.back_box{
    margin-top:50px;
}
.back{
    width: 80%;
    height:40px;
    font-size: 20px;
    background:rgb(48, 224, 48);
    border-radius: 16px;
    color:white;
    letter-spacing: 2px;
}
.cart{
    width:30px;
    height: 30px;
    border-radius: 50% 50%;
    font-size: 18px;
    color: rgb(56, 41, 41);
    background: rgb(250, 20, 20);
}
.pic_text {
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.content_box {
    height: 300px;
}

.pic_box_container {
    width: 90%;
}

.pic_box {}

.contents {
    width: 90%;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
    letter-spacing: 4px;
}

.star {
    margin-left: 50px;
}

.time {
    margin-left: 40px;
}

.pic {
    width: 50px;
}

.pic img {
    width: 100%;
}
</style>
