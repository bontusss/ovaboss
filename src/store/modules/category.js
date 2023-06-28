import category from '@/resources/api/category'
import { isset } from '@/resources/inc/utils'

// initial state
const state = {
  all: [],
  category: {}
}

// getters
const getters = {
  getCategories: (state) => {
    return state.all
  },
  getCategory: (state) => {
    return state.category
  },
  getCategoryById: (state) => (id) => {
    return state.all.find((category) => category.id === id)
  },
  getProductCategories: (state) => {
    if (!isset(state.all)) return []
    return state.all.filter((category) => category.package_id === 1)
  },
  getServiceCategories: (state) => {
    if (!isset(state.all)) return []
    return state.all.filter((category) => category.package_id === 2)
  },
  getBillCategories: (state) => {
    if (!isset(state.all)) return []
    return state.all.filter((category) => category.package_id === 3)
  },
  getCategoriesByState: (state) => (schState) => {
    if (!isset(state.all)) return []
    return state.all.filter((category) => `${category.state}` === schState)
  },
  getCategoryIndexById: (state) => (id) => {
    return state.all.findIndex((category) => category.id === id)
  },
  getCategoriesCount: (state) => {
    return state.all.length
  }
}

// actions
const actions = {
  async getCategories({ commit }) {
    await category.getCategories((data) => {
      commit('setCategories', data)
    })
  },
  async getSlimCategories({ commit }) {
    await category.getSlimCategories((data) => {
      commit('setCategories', data)
    })
  },
  async create({ commit }, formData) {
    await category.createCategory(formData, (data) => {
      commit('addCategory', data)
    })
  },
  async view({ commit, getters }, category_id) {
    commit('setCategoryDetails', getters.getCategoryById(category_id))
  },
  async edit({ commit, getters }, category_id, formData) {
    // eslint-disable-next-line no-unused-vars
    await category.updateCategory(category_id, formData, (data) => {
      commit('updateCategory', {
        idx: getters.getCategoryIndexById(category.id),
        category: data
      })
    })
  },
  async delete({ commit, getters }, category_id) {
    await category.deleteCategory(category_id, () => {
      commit('deleteCategory', getters.getCategoryIndexById(category.id))
    })
  }
}

// mutations
const mutations = {
  addCategory(state, category) {
    state.all.push(category)
  },
  updateCategory(state, payload) {
    state.all[payload.idx] = payload.category
  },
  deleteCategory(state, idx) {
    state.all.slice(idx, 1)
  },
  setCategories(state, categories) {
    state.all = categories
  },
  setCategoryDetails(state, category) {
    state.category = category
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
