<template>
 <div class="box df f-column">
    
    <div class=" h100"><div class="goback b1"><van-icon name="arrow-left" /></div></div>
    <div class="container df w00 j-center">

        <div class=" contents wb90  bgw h500 ">
            <div> 注册 / 登录</div>
    



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
    .container{
        .contents{

        }
    }
}
</style>