<template>
 <div>
    <div class="tops h30 b1 df">
      <div class="ccc"><van-icon name="arrow-left" /></div>
      <div cla>城市列表</div>
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
     axios.get('./city.json').then(res=>{
      this.citys = res.data
     }).catch(err=>{
       console.log(err)
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>