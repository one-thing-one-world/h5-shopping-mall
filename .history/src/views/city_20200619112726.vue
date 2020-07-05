<template>
 <div>
    <div class="tops h30  df">
      <div class="ccc top_title_left "><van-icon name="arrow-left" /></div>
      <div class="ccc top_title_right">城市列表</div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       citys:[],
     }
   },
   methods: {
     
   },
   mounted() {
    //  axios.get('./city.json').then(res=>{
    //   this.citys = res.data
    //  }).catch(err=>{
    //    console.log(err)
    //  })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.tops{
  font-size: 22px;
  .top_title_left{
    width:40px;

  }
  .top_title_right{
  width:335px;
}
}


</style>