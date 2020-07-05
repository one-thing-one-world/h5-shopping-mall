<template>
<div class="box b1">
<div></div>
    


   </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        category: {
            type: Array
        },
        pic:{
          type:String
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
      gotocate(a,b){
        
      }

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box{
  
  background: #F0F0EE;
  padding:15px 0px;
}
.box_container{
  padding:8px 0px;
  border-radius: 16px;
}
.picbox {
    margin-left: 6px;
    margin-right: 6px;
    background: white;
}

.pic {
    width: 50px;
    height: 50px;
}
</style>
