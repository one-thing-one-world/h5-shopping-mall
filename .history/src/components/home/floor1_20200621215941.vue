<template>
<div>

    <div>{{floorName.floor1}}</div>
    <div>

        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        floor11: {
            type: Array
        },
        floorName: {
            type: Object
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getOne() {

            this.floor11.map((item, index) => {
                item.goodsId
            })

            this.$api.getGoodsOne().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

           
        },
        fn(){
             let a = [{
                id: 1,
                name: 'me'
            }, {
                id: 1,
                name: 'you'
            }, {
                id: 2,
                name: 'her'
            }];
            this.arr = _.groupBy(a, 'id')
            console.log(object);
        }

    },
    mounted() {
        console.log(this.floor11);
        console.log(this.floorName.floor1);
        this.fn()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
