<template>
 <div>
this is comment
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

        grtComment(id,rate,content,anonymous,_id,order_id,image){
        return service.post(`/goodsOne/comment`,{
            id: id,
            rate: rate,
            content: content,
            anonymous: anonymous,
            _id: _id,
            order_id: order_id,
            image: image
        })
    },

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