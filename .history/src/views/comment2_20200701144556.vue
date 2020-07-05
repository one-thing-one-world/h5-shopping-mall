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

            <div class="m-l-30">
                <van-rate v-model="value" :count="5" />
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
</style>
