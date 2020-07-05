<template>
 <div>
    
    <div v-for="(item,index)slides"></div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       slides:{
           type:Array
       }
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
console.log(this.slides);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>