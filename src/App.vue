<template>
  <div id="app" v-cloak>
    <router-view v-loading="loading" :key="$route.path + $route.query.appId"></router-view>
  </div>
</template>

<script>
import Nav from './layout/components/nav';
import { mapState } from 'vuex';
let loader;
export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      loading: false,
    }
  },
  beforeCreate() {
    if(!localStorage.getItem('token')) {
      this.$router.push('signin');
    }else{
      this.$store.dispatch('userInfoAct')
    }
  },
  mounted(){
    window.onpopstate = () => {
      history.go(1)
    }
  },
    computed:{
        ...mapState({
            appData:state=>state.app.appData.count,
        }),
    },
    watch:{
      $route(to){
        if(to.path=='/dashboard'&&this.appData!=0){
          this.$router.replace('/application/info');
        }else if(to.path.split('/').indexOf('account')>-1||to.path.split('/').indexOf('order')>-1||to.path.split('/').indexOf('workorder')>-1||to.path.split('/').indexOf('finance')>-1){
          this.$store.dispatch('serMenuBolAct',false);
        }
      }
    }
}
</script>

<style>
@import url(https://at.alicdn.com/t/font_560073_xio86fe74vxwdn29.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
html, body, #app{
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
.iconfix{
  margin-right: 10px;
}
</style>
