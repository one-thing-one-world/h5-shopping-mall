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
        
            div

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
            oneItem: []
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
</style>
