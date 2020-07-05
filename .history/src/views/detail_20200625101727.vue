<template>
<div>
    <div class="box">

        <div class="h50">

            <div class="goback ">
                <van-icon name="arrow-left" />
            </div>

        </div>

        <div>
            <div v-if="obj">
                <img :src="obj.image" alt="">
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
            id: '',
            obj: null,
        }
    },
    methods: {

        getDetail() {
            this.$api.getGoodsOne(this.id).then(res => {

                this.obj = res.goods.goodsOne

            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {
        this.id = this.$route.query.id
        console.log(this.id);
        this.getDetail()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.goback {
    width: 36px;
    height: 36px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #c8cecc;
    opacity: 0.6;
    position: relative;
    left: 15px;
    top: 20px;
}
</style>
