<template>
    <el-container>
        <el-header height="100px" style="padding:0;">
            <Topheadr />
            <Header />
        </el-header>
        <el-container class="container">
            <Sider v-if="hasApp" />
            <el-main class="main">
                <el-main class="main-wrap">
                    <router-view :key="$route.path + $route.query.appId"></router-view>
                </el-main>
            </el-main>
        </el-container>
        <Newapp />
    </el-container>
</template>

<script>
import Topheadr from './components/topheader';
import Header from './components/header';
import Sider from './components/sider';
import Newapp from './components/newapp';
import { mapState } from 'vuex';

export default {
    components:{
        Topheadr,
        Header,
        Sider,
        Newapp
    },
    beforecreate(){
        if(!localStorage.getItem('token')) {
            this.$router.push('signin');
        }
    },
    computed:{
        ...mapState({
            appData:state=>state.app.appData.results,
        }),
        hasApp:function(){
            if(this.appData&&this.appData.length==0){
                /* eslint-disable */
                this.$router.push('/dashboard');
            }
            if(this.appData&&this.appData.length>0&&this.$router.currentRoute.path=='/'){
                this.$router.push('/application/info');
            }
            return this.appData&&this.appData.length > 0 ? true : false;
        }
    },
    watch:{
        $route(to, from){
            //reject dashboard
            if(this.hasApp && to.path == '/dashboard'){
                this.$router.replace(from.path);
            }
            this.$store.dispatch('setAppIdAct',to.query.appId);
        }
    }
}
</script>

<style scoped>
    .el-container{
        width: 100%;
        height: 100%;
    }
    .container{
        height: calc(100% - 100px);
    }
    .el-main{
        height:100%;
        float: left;
        width: calc(100% - 400px);
    }
    .el-header{
        min-width: 900px;
    }
    .el-aside{
        background: rgba(0, 0, 0, 0.65);
    }
    .main{
        padding: 50px 100px;
        overflow-y: scroll;
    }
    .main-wrap{
        width:100%;
        height: auto;
        background: #fff;
        border-radius: 5px;
        min-width: 900px;
        padding: 40px;
    }
</style>


