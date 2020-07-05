<template>
 <div>
    this is go through
 </div>
</template>

<script>
import 
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       getDatas:null,

     }
   },
   methods: {
      getData(){
       this.getDatas = localStorage.getItem('viewss')
       console.log(this.getDatas);
     }

   },
   mounted() {
     this.getData()
     

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>