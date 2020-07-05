<template>
 <div>
    this is go through
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
       getDatas:null,

     }
   },
   methods: {
      getData(){
       this.getDatas = localStorage.getItem('viewss')
       clg
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