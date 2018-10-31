// 组装模块并导出 store 的文件
import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import product from './modules/product';
Vue.use(Vuex);
// 导出需要的模块
export default new Vuex.Store({
  modules: {
    app,
    product,
  },
});