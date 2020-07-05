<template>
 <div>
    <category :activeIndex='activeIndex'></category>
 </div>
</template>

<script>
import category from '../components/cata/category.vue'
 export default {
   name: '',
   props: {
   },
   components: {
     category,

   },
   data () {
     return {
        activeIndex:-1 
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

</style>