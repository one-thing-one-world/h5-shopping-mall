<template>
 <div class="box df f-column">
    
    <div class="h100"><div class="goback b1"><van-icon name="arrow-left" /></div></div>
    <div class="df w00 j-center">

        <div class=" wb90 b1 h600 ">
        
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
    height: 667px;
    
    background: url('../assets/login.jpg');
    .goback{
        width: 36px;
        height: 36px;
        font-size:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #c6cfcc;
        position: relative;
        left: 10px;
        top: 10px;
    }
}
</style>