<template>
<div class="df f-column  \ box b1">

   <div class="df r1 box_container bgw">
     <div  @click="gotocate(item,index)" class="f1 picbox" v-for="(item,index) in category" :key="index">

        <div class=" ccc">
            <img class="pic" :src="item.image" alt="">
        </div>
        <div class=" fs15 ccc">
            {{item.mallCategoryName}}
        </div>

    </div>

    <div class="bottom">
      <div>
        <img class="w375" :src="pic" alt="">
      </div>
    </div>

    


   </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        category: {
            type: Array
        },
        pic:{
          type:String
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
      gotocate(a,b){
        
      }

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box{
  background: #F0F0EE;
  padding:15px 0px;
}
.box_container{
  padding:8px 0px;
  border-radius: 16px;
}
.picbox {
    margin-left: 6px;
    margin-right: 6px;
    background: white;
}

.pic {
    width: 50px;
    height: 50px;
}
</style>
