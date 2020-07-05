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
  
 height: 300px;
 border: 1px solid red;
 width\
  
}
</style>