import product from '../../api/store/Product'

// initial state
const state = {
    products: [],
    product: {},
}

// getters
const getters = {
    getProducts: (state) => {
        return state.products;
    },
    getProduct: (state) => {
        return state.product;
    },
    getProductById: state => id => {
        return state.products.find(product => product.id === id)
    },
    getProductIndexById: state => id => {
        return state.products.findIndex(product => product.id === id)
    },
}

// actions
const actions = {
    async getProducts({commit}) {
        commit('setProducts', []);
        await product.getProducts(data => {
            commit('setProducts', data)
        })
    },
    async details({commit}, productId) {
        await product.getProductDetails(productId, data => {
            commit('setProductDetails', data.product)
        })
    },
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
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
