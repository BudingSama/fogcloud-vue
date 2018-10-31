<template>
    <div class="wrap">
        <router-view v-if="productList&&productList.length"></router-view>
        <Dashboard v-if="productList&&!productList.length" />
    </div>
</template>
<style scoped>
.wrap{
    height: 100%;
}
</style>
<script>
import Dashboard from './components/dashboard';
import { mapState } from 'vuex';
export default {
    components:{
        Dashboard,
    },
    created(){
        // console.log(this.$store.state.product.productList);
    },
    computed:{
        ...mapState({
            productList:state => state.product.productList,
        })
    }
}
</script>