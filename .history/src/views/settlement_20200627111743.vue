<template>
<div>
    <div>

                <div class="top">
                    <div> 《 </div>
                    <div>订单结算</div>

                </div>
                <div>
                
                    <div>点击添加收货地址</div>

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
        }
    },
    methods: {
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
        },
    },
    mounted() {
        this.id = this.$route.query.id

        this.getCard()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
