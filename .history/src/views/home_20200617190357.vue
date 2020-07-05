<template>
 <div>

    <div>
      <div class="one">ppp</div>
    </div>

 </div>
</template>

<script>
import axios from "axios"
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
      this.$api.getHomeData().then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(object);
      })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.one{
  width:100px;
  height:100px;
  border:1px solid red;
}
</style>