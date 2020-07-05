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

        <div class="content_box  j-center" v-if="oneItem">
            <div class="contents r1">{{oneItem.content}}</div>
        </div>

        <div class="pic_box df" v-if="oneItem">

            <div class="pic_box_coantainer">
                <div>
                    <div class="pic"><img :src="oneItem.goods[0].image" alt=""></div>
                </div>

                <div>
                    {{
                oneItem.goods[0].name
            }}
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
.content_box {
    height: 300px;
}

.pic_box {}

.contents {
    width: 90%;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.star {
    margin-left: 50px;
}

.time {
    margin-left: 40px;
}

.pic {
    width: 80px;
}

.pic img {
    width: 100%;
}
</style>
