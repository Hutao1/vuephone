<template>
    <ul>
        <li v-for="(item,index) in shuju"><input type="button" value="+" @click="addnum({id:item.id})"> id为:{{item.id}} 数量为:{{item.num}} <input type="button" value="-" @click="delnum({id:item.id})"></li>
    </ul>
</template>
<script>
    import {mapGetters} from 'vuex';
export default {
    methods:{
        addnum(payload){
            this.$store.dispatch('addnum',payload)
        },
        delnum(payload){
            this.$store.dispatch('delnum',payload)
        }
    },
    computed:mapGetters([
        'shuju'
    ])
}
</script>
<style>

</style>