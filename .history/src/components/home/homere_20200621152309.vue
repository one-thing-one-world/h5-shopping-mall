<template>
<div>
    <div class="w375 recom" >
        <div class="df m-l-20  a-center  h36">商品推荐</div>
    </div>
    <div class="container" ref="container">
        <div class="box df b1">
              <div class="r1" v-for="(item,index) in recommend" :key="index">


                  <div><img class="w120  h" :src="item.image" alt=""></div>

              
              </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
      recommend:{
        type: Array
      }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
console.log(this.recommend);
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>
.recom{
  border-bottom:1px solid #F0F0EE;
}
</style>
