<template>
 <div class="box">
    <div class="goback"><van-icon name="arrow-left" /></div>
    <div>

        
    
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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    width: 100%;
    height: 200px;
    background: url('../assets/login.jpg');
    .goback{
        width: 30px;
        height: 30px;
        border: 1px solid red;
        font-size:22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
}
</style>