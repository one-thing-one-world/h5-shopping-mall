<template>
<div>

    <div>{{floorName.floor1}}</div>
    <div>

        <div v-for="(item,index) in floor11" :key="index">

            <div>
                <div>
                    <div v-if="index===0"> <img class="pic0 " :src="floor11[index].image" alt=""></div>
                    <div v-if="index===1"> <img class="pic1 " :src="floor11[index].image" alt=""></div>
                   
                </div>
                <div>
                    <div v-if="index===2"> <img class="pic2  " :src="floor11[index].image" alt=""></div>
                    <div v-if="index===3"> <img class="pic3 " :src="floor11[index].image" alt=""></div>
                    <div v-if="index===4"> <img class="pic4 " :src="floor11[index].image" alt=""></div>
                    
                </div>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
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
            arr: []
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

        }

    },
    mounted() {
        console.log(this.floor11);
        console.log(this.floorName.floor1);

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>
.pic0{
    width: 186px;
    height: 180px;
    border-right: 1px solid gray;
    border
}
.pic1{
    width: 180px;
    height: 100px;
}
</style>
