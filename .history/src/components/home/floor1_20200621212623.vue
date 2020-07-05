<template>
<div>

    <div></div>
    <div>

        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        floor11:{
            type:Array
        },
        floorName:{
            type:Object
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        console.log(this.floor11);
        console.log(this.floorName.flo);

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
