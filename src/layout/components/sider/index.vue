<template>
    <el-aside width="200px">
        <el-col :span="12">
            <el-menu
            v-if="loader"
            :default-active="defaultPath"
            background-color="#404040"
            text-color="#fff"
            active-text-color="#409EFF">
            <el-menu-item @click="action" :key="index" :index="`${item.path}`" v-for="(item,index) in sider">
                <i :class="('iconfix iconfont '+item.icon)"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
            </el-menu>
            <!-- product -->
            <el-menu
            v-if="!loader"
            unique-opened
            :default-active="productPath"
            background-color="#404040"
            text-color="#fff"
            active-text-color="#409EFF"
            >
            <el-submenu index="1" v-if="productSelect">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>产品列表</span>
                </template>
                <el-menu-item :key="index" @click='changeProduct' v-for="(item,index) in productList" :index="`${item.product_id}`">
                <i :class="('iconfix iconfont '+IconJSON[`${item.category_translate.subclass_name}`])"></i>
                <span class="productList" slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="static-1" class="static-item"><i class="el-icon-plus"></i>新建产品</el-menu-item>
            <el-menu-item index="static-2" class="static-item"><i class="el-icon-setting"></i>产品调试</el-menu-item>
            </el-menu>
        </el-col>
    </el-aside>
</template>

<script>
import Nav from '../nav';
import IconJSON from './icon.json';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            sider:null,
            defaultPath:null,
            loader:false,
            IconJSON,
            productPath:null,
        }
    },
    created(){
        const NowPath = `/${window.location.hash.split('?')[0].split('#')[1].split('/')[1]}`;
        if(NowPath!='/product'){
            this.loader = true;
        }else{
            this.$store.dispatch('getProductAct',location.hash.split('?appId=')[1]);
        }
        this.fixRoute(NowPath);
        this.defaultPath = `${this.$route.path.split('/')[2]}`;
    },
    methods:{
        fixRoute:function(toPath){
            const bol = this.$store.state.app.menuBol;
            let SiderList = bol ? Nav.menu : Nav.user;
            for(let i = 0; i < SiderList.length; i += 1){
                if(SiderList[i].path == toPath.substr(1)){
                    this.defaultPath = SiderList[i].children[0].path;
                    this.sider = SiderList[i].children;
                    break;
                }
            }
        },
        action:function(e){
            this.$router.push({path:`${e.index}`,query:{appId:window.location.hash.split('?appId=')[1]}})
        },
        changeProduct:function(e){
            this.$router.push({query:{appId:window.location.hash.split('?appId=')[1].split('&pId')[0],pId:e.index}});
        }
    },
    computed:{
        ...mapState({
            productList:state => state.product.productList,
        }),
        productSelect:function(){
            /* eslint-disable */
            let pId = null;
            if(this.productList&&this.productList.length>0){
                if(window.location.hash.split('=').length>2){
                    pId = window.location.hash.split('&pId=')[1];
                }else{
                    pId = this.productList[0].product_id;
                }
                if(!this.$router.currentRoute.query.pId){
                    this.$router.replace({query:{appId:location.hash.split('?appId=')[1].split('&pId')[0],pId}});
                }
                this.productPath = window.location.hash.split('&pId=')[1];
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>

<style scoped>
    .el-aside{
        height:100%;
        float: left;
    }
    .el-menu,.el-col{
        width: 100%;
        text-align: left;
        border-right: 0;
    }
    .productList{
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        width: 100%;
    }
    .static-item{
        color: #fff!important;
    }
</style>


