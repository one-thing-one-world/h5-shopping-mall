<template>
 <div>

    <div>
      <div class="one"></div>
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
       axios.get('https://cnodejs.org/api/v1/topics').then(res=>{
           console.log(11);
       }).catch(err=>{
           console.log(err);
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
  width:10px；
  height；
}
</style>