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

        <div class="df m-t-20">

            <div class="star ccc">
                <van-rate v-model="value" :count="5" />
            </div>
            <div class="time ccc">
                <div>{{this.oneItem.comment_time}}</div>
            </div>
        </div>

        <div class="b1">
            <div class="contents">{{this.oneItem.content}}</div>
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
            oneItem: []

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

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}
.star{
    margin-left:50px;
}
.time{
    margin-left: 40px;
}
</style>
