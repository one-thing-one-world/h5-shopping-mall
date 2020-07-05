<template>
<div>

    <div class="df   h30 a-center j-center top">
        <div class="floor_text   df a-center">1F</div>
        <div class=" h30 df a-center">{{floorName.floor1}}</div>
    </div>
    <div>

        <div class="df" >

          
                <div>
                    <div @click="gotoDetail(item.goodsId)" > <img class="pic0 " :src="floor11[0].image" alt=""></div>
                    <div> <img class="pic1 " :src="floor11[1].image" alt=""></div>
                   
                </div>
                <div>
                    <div> <img class="pic2  " :src="floor11[2].image" alt=""></div>
                    <div> <img class="pic3 " :src="floor11[3].image" alt=""></div>
                    <div> <img class="pic4 " :src="floor11[4].image" alt=""></div>
                    
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
           
        }
    },
    methods: {
        gotoDetail(a) {

            this.$router.push({
                name: 'detail',
                query: {
                    id: a
                }
            })
            console.log(a);

        }
       

    },
    mounted() {
     
console.log(object);
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>
.floor_text{
    width: 18px;
    height: 18px;
    font-size: 14px;
    border-radius: 10px !important;
    background: red;
    color: white;
    margin-right: 5px;

}
.top{
    color: red !important;
     background: #F0F0EE;
     padding:5px 0px;
}
.box{
    display:flex;
}
.pic0{
    width: 187px;
    height: 187px;
  
    border-bottom: 1px solid gray;
}
.pic1{
    width: 187px;
    height: 90px;
    
}
.pic2{
    width: 180px;
    height: 91px;
    border-left: 1px solid rgb(179, 175, 175);
    border-bottom: 1px solid rgb(197, 193, 193);
}
.pic3{
    width: 180px;
    height: 91px;
    border-left: 1px solid rgb(179, 175, 175);
    border-bottom: 1px solid rgb(179, 175, 175);
}
.pic4{
    width: 180px;
    height: 90px;
    border-left: 1px solid gray;
    
}
</style>
