<template>
 <div>
    this is go through
 </div>
</template>

<script>
import uniq from 'lodash/uniq'
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
       this.getDatas = JSON.parse(localStorage.getItem('viewss'))
       this.getDatas = uniq(this.getDatas)
        this.getDatas
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