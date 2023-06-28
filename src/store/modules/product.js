import product from '../../resources/api/product'

// initial state
const state = {
  products: [],
  product: {}
}

// getters
const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
  getProductIndexById: (state) => (id) => {
    return state.products.findIndex((product) => product.id === id)
  }
}

// actions
const actions = {
  async create({ commit }, formData) {
    await product.createProduct(formData, (data) => {
      commit('addProduct', data.product)
    })
  },
  async edit({ commit, getters }, { product_id, formData }) {
    await product.updateProduct(product_id, formData, (data) => {
      commit('updateProduct', {
        idx: getters.getProductIndexById(data.product.id),
        product: data.product
      })
    })
  },
  async delete({ commit, getters }, productId, formData) {
    await product.updateProduct(productId, formData, (data) => {
      commit('deleteProduct', getters.getProductIndexById(data.product.id))
    })
  },
  async getProducts({ commit }) {
    await product.getProducts((data) => {
      commit('setProducts', data)
    })
  },
  async details({ commit }, productId) {
    await product.getProductDetails(productId, (data) => {
      commit('setProductDetails', data.product)
    })
  }
}

// mutations
const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
  updateProduct(state, payload) {
    state.products[payload.idx] = payload.product
  },
  deleteProduct(state, idx) {
    state.products.slice(idx, 1)
  },
  setProducts(state, products) {
    state.products = products
  },
  setProductDetails(state, product) {
    state.product = product
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
