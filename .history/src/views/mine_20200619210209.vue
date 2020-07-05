<template>
 <div ref="container">
  <van-sticky :container="container">
    <van-button type="warning">指定容器</van-button>
  </van-sticky>
</div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.container{
  
  display: flex;
  width: 375px;
  flex-wrap: wrap;
  .box{
    width: 30%;
    height: 20px;
    border: 1px solid red;
  }
}
</style>