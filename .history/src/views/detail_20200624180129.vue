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
           this.$api.
       }

   },
   mounted() {
       this.id = this.$route.query.id 
       console.log(this.id);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>