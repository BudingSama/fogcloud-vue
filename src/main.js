import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import echarts from 'echarts';
import routes from './router';
import store from './store/index';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {
    from.name ? next({ name:from.name }) : next('/');
  } else {
    if(!localStorage.getItem('token')){
      if(to.path == '/'){
        next('/signin');
      }
      next();
    }else{
      if(to.path=='/signin'||to.path=='/register'||to.path=='/forget'){
        next('/');
      }else{
        next();
      }
      //prevent back action
      history.pushState(null, null, location.href);
    }
  }
})


const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

Vue.use(vm);


