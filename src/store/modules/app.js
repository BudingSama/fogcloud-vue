import { req } from '../../utils/request';
const App = {
  state: {
      menuBol:true,
      userData:{
        user:{}
      },
      appData:{
        results:null,
        count:0
      },
      lanList:[],
      newAppBol:false,
  },
  actions: {
    setUserAct({ commit }, param) {
      commit('setUser', param);
    },
    userInfoAct({ commit }) {
      if (localStorage.getItem('token')) {
        req({ url: '/account/info/' }).then(data => commit('setUser',data.data.data));
        req({ url: '/app/app_list/' }).then(data => commit('setApp',data.data.data))
      }
    },
    setAppIdAct({ commit }, param) {
      commit('setAppId', param);
    },
    setLanAct({ commit }) {
      req({ url: '/app/language/' }).then(data => commit('setLan',data.data.data));
    },
    setNewAppAct({ commit }, param) {
      commit('setNewapp',param);
    },
    serMenuBolAct({ commit },param) {
      commit('setMenuBol',param)
    }
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.userData = user;
    },
    setApp(state, app) {
      state.appData = app;
    },
    setAppId(state, appHash) {
      state.appHash = appHash;
    },
    setLan(state, lanList) {
      state.lanList = lanList;
    },
    setNewapp(state,newAppBol) {
      state.newAppBol = newAppBol;
    },
    setMenuBol(state,menuBol) {
      state.menuBol = menuBol;
    }
  },
};

export default App;