<template>
 <div>
    <div>商品分内</div>
    <div>
    
        <div class="left">
            
        </div>
        <div class="right">

        </div>
    
    </div>
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
listCategory(){
            return this.$store.state.listCategory
        }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>