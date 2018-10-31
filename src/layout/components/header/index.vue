<template>
    <el-header class="header" height="64px">
        <el-popover
            placement="top-start"
            width="500"
            trigger="hover"
            >
            <div class="popover-wrap">
                <div class="insert-app" v-for="(item,index) in appData" :key='index' @click="changeApp">
                    <div class="insert-item">
                        <img v-if="item.icon" :src="item.icon" alt="">
                        <div v-if="!item.icon" class="item-none"></div>
                    </div>
                    <span class="app-title">{{item.app_name}}</span>
                </div>
                <div class="insert-app" @click="newappFn">
                    <div class="insert-item">
                        <i class="el-icon-plus"></i>
                    </div>
                    <span class="app-title">新建应用</span>
                </div>
            </div>
            <div class="left-select" slot="reference" v-if="menuBol">
                <img v-if="appSelect&&appSelect.icon" :src="appSelect.icon" alt="">
                <div class="app-noneimg" v-if="!appSelect||!appSelect.icon"></div>
                <span class="app-select">{{appSelect.app_name}}</span>
                <i class="el-icon-arrow-down"></i>
            </div>
        </el-popover>
        <div class="left-select" @click="backMenuFn" v-if="!menuBol">
            <i class="el-icon-caret-left"></i>
            <span style="font-weight:bold;color:#409EFF"> 返回</span>
            <span> | </span>
            <span>我的账户</span>
        </div>
        <el-menu
            class="el-menu"
            mode="horizontal"
            router
            :default-active="defaultPath"
        >
            <template v-if="menuBol" v-for="(navMenu,index) in navMenus.menu">
                <el-menu-item :key="index" :index="`/${navMenu.path}/${navMenu.children[0].path}`">{{navMenu.name}}</el-menu-item>
            </template>
            <template v-if="!menuBol" v-for="(navMenu,index) in navMenus.user">
                <el-menu-item :key="index" :index="`/${navMenu.path}/${navMenu.children[0].path}`">{{navMenu.name}}</el-menu-item>
            </template>
        </el-menu>
        <div class="user-bar">
            <el-badge is-dot class="item">
                <i class="el-icon-bell"></i>
            </el-badge>
            <el-dropdown style="float:right">
                <div class="user-info">
                    <div class="img-wrap">
                        <img :src="this.$store.state.app.userData.headimage" alt="">
                    </div>
                    <span>{{this.$store.state.app.userData.user.username}}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/account/overview"><el-dropdown-item><i class="el-icon-document"></i> &nbsp;账户资料</el-dropdown-item></router-link>
                    <router-link to="/order/total"><el-dropdown-item><i class="el-icon-goods"></i> &nbsp;我的订单</el-dropdown-item></router-link>
                    <router-link to="/workorder/allview"><el-dropdown-item><i class="el-icon-edit-outline"></i> &nbsp;我的工单</el-dropdown-item></router-link>
                    <router-link to="/finance/totalview"><el-dropdown-item><i class="el-icon-news"></i> &nbsp;我的财务</el-dropdown-item></router-link>
                    <el-dropdown-item><div @click='signoutFn'><i class="el-icon-circle-close-outline"></i> &nbsp;退出</div></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
import Nav from '../nav';
import { mapState } from 'vuex';
import { req } from '../../../utils/request';
export default {
    methods:{
        signoutFn:function(){
            req({
                url: '/account/signout/',
                method: 'post',
                }).then((res) => {
                if (res.data.meta.code === 0) {
                    localStorage.clear();
                    window.location.href = '/';
                }
            });
        },
        changeApp:function(e){
            const Appname = e.currentTarget.children[1].innerHTML;
            for(let i = 0; i < this.appData.length; i ++){
                if(this.appData[i].app_name == Appname){
                    this.$store.dispatch('setAppIdAct',this.appData[i].app_id);
                    this.$router.push({path:'/application/info',query:{appId:this.appData[i].app_id}})
                    break;
                }
            }
        },
        newappFn:function(){
            this.$store.dispatch('setNewAppAct',true);
        },
        backMenuFn:function(){
            this.$router.push({path:'/application/info',query:{appId:this.appData[0].app_id}});
            this.$store.dispatch('serMenuBolAct',true);
        }
    },
    data(){
        return {
            navMenus:Nav,
            menuBol:this.$store.state.app.menuBol,
            username:null,
            hasApp:false,
            defaultPath:'',
        }
    },
    created(){
        const data = this.menuBol ? this.navMenus.menu : this.navMenus.user;
        const nowpath = location.hash.split('?')[0].substr(1);
        for(let i = 0; i < data.length; i++){
            if(nowpath.split('/').indexOf(data[i].path)>-1){
                this.defaultPath = `/${data[i].path}/${data[i].children[0].path}`;
                break;
            }
        }
    },
    computed:{
        ...mapState({
            appData:state => state.app.appData.results,
            appHash:state=>state.app.appHash,
        }),
        appSelect:function(){
            /* eslint-disable */
            if(this.appData&&this.appData.length > 0){
                this.hasApp = true;
                let appid;
                if(this.appHash){
                    appid = this.appHash;
                }else if(window.location.hash.split('=').length>2){
                    appid = window.location.hash.split('?appId=')[1].split('&pId')[0];
                }else if(window.location.hash.split('=').length>0){
                    appid = window.location.hash.split('?appId=')[1];
                }
                if(appid){
                    this.$store.dispatch('setAppIdAct',appid);
                    for(let i = 0;i < this.appData.length; i++){
                        if(appid==this.appData[i].app_id){
                            this.$router.push({query:{appId:this.appData[i].app_id}});
                            return this.appData[i];
                        }
                    }
                    return {
                        app_name:'',
                        icon:false
                    };
                }else{
                    if(!this.$router.currentRoute.query.appId){
                    this.$router.push({query:{appId:this.appData[0].app_id}});
                    }
                    return this.appData[0];
                }
            }else{
                return {
                    app_name:'未创建',
                    icon:false
                };
            }
        },
    },
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .header{
        padding: 0 50px;
        line-height: 64px;
        color: #fff;
        border-bottom: 1px solid rgb(217, 217, 217);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
        background: #fff;
    }
    .el-menu.el-menu--horizontal{
        border: none;
        height: 64px;
        float: left;
    }
    .el-menu--horizontal>.el-menu-item{
        height: 64px;
        line-height: 64px;
    }
    .left-select{
        cursor: pointer;
        width: 150px;
        height: 64px;
        line-height: 64px;
        float: left;
        color: #909399;
        font-size: 14px;
        position: relative;
    }
    .left-select img{
        width: 30px;
        height: 30px;
        border-radius: 4px;
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        margin:auto 0;
    }
    .el-icon-plus{
        margin-right:10px;
    }
    .popover-wrap{
        width: 100%;
        min-height: 100px;
        padding-bottom: 20px;
        padding: 0 20px;
    }
    .insert-app{
        width: 80px;
        height: 100px;
        cursor: pointer;
        float: left;
        margin-right: 15px;
        margin-bottom:15px;
    }
    .insert-item{
        width: 80px;
        height: 80px;
        border: 1px solid #eee;
        border-radius: 8px;
        position: relative;
        text-align: center;
        align-items: center;
        display: flex;
    }
    .insert-item img{
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
    .insert-item i{
        margin: auto;
    }
    .insert-app span{
        font-size: 12px;
        display: block;
        text-align: center;
        width: 100%;
        margin-top: 5px;
    }
    .insert-app .app-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .insert-app:hover .app-title{
        color: #409EFF;
    }
    .el-icon-bell{
        display: block;
        color: #909399;
        cursor: pointer;
    }
    .user-bar,.user-info{
        float: right;
        height: 64px;
        color: #909399;
    }
    .user-info{
        margin:0 15px;
        cursor: pointer;
    }
    .img-wrap{
        display: flex;
        align-items: center;
        float: left;
        height: 64px;
        margin-right: 10px;
    }
    .img-wrap img{
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        float: left;
        border:1px solid #eee;
        background: #eee;
    }
    .el-dropdown-item{
        color: #909399;
    }
    .item{
        padding: 0;
    }
    .item-none{
        background: #ededed;
        width: 100%;
        height: 100%;
    }
    .app-noneimg{
        width: 30px;
        height: 30px;
        border-radius: 4px;
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        margin:auto 0;
        background: #ededed
    }
    .app-select{
        font-size: 12px;
        margin-left: 35px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 80px;
        float: left;
        text-align: center;
    }
</style>


