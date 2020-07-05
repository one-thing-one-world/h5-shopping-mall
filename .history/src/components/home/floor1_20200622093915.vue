<template>
<div>

    <div>{{floorName.floor1}}</div>
    <div>

        <div >

          
                <div>
                    <div> <img class="pic0 " :src="floor11[0].image" alt=""></div>
                    <div> <img class="pic1 " :src="floor11[index].image" alt=""></div>
                   
                </div>
                <div>
                    <div> <img class="pic2  " :src="floor11[index].image" alt=""></div>
                    <div> <img class="pic3 " :src="floor11[index].image" alt=""></div>
                    <div> <img class="pic4 " :src="floor11[index].image" alt=""></div>
                    
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
            arr: [],
            index:0,
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
.box{
    display:flex;
}
.pic0{
    width: 180px;
    height: 180px;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
}
.pic1{
    width: 180px;
    height: 100px;
}
.pic2{
    width: 180px;
    height: 100px;
}
.pic3{
    width: 180px;
    height: 100px;
}
.pic4{
    width: 180px;
    height: 100px;
}
</style>
