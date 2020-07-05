<template>
 <div>
       this is detail 
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
            id:'',
     }
   },
   methods: {
       getDetail(){
           this.$api.getGoodsOne().then(res=>{
               console.log(res);
           }).catch(err)
       }

   },
   mounted() {
       this.id = this.$route.query.id 
       console.log(this.id);
       this.getDetail()

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>