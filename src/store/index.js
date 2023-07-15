import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProductoId: 1,
    productos: [
      // Product objects
    ],  
  },
  getters: {
    getProductoById: (state) => (id) => {
      return state.productos.find((producto) => producto.id === id) || null;
    },
  },
  mutations: {
    setSelectedProductoId(state, id) {
      state.selectedProductoId = id;
    },  
    updateProducto(state, data) {
      const index = state.productos.findIndex(producto => producto.id === data.id);
      if (index !== -1) {
        state.productos[index] = data;
      } else {
        state.productos.push(data);
      }
    },
  },
  actions: {
    updateSelectedProductoId({ commit }, id) {
      commit('setSelectedProductoId', id);
    },
  },
  modules: {
  }
})
