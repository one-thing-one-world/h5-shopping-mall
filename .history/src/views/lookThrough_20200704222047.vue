<template>
<div>
    <div class="top df h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2">评价中心</div>
    </div>
</div>
</template>

<script>
import uniq from 'lodash/uniq'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            getDatas: null,

        }
    },
    methods: {
        getData() {
            this.getDatas = JSON.parse(localStorage.getItem('viewss'))
            console.log(this.getDatas);
            this.getDatas = uniq(this.getDatas)
            this.getDatas.map((item, index) => {
                this.$api.getGoodsOne(item).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })
        }

    },
    mounted() {
        this.getData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
