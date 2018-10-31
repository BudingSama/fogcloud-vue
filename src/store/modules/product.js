import { req } from '../../utils/request';
const Product = {
  state: {
      productList:null,
  },
  actions: {
    getProductAct({ commit }, param) {
        req({ url: `/product/product_list/?app_id=${param}` }).then(data => commit('getProduct',data.data.data.results));
    }
  },
  getters: {},
  mutations: {
    getProduct(state, pidList) {
      state.productList = pidList;
    }
  },
};

export default Product;