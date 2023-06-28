import { isset } from '@/resources/inc/utils'

// initial state
const state = {
  all: [],
  subCategory: {}
}

// getters
const getters = {
  getSubCategories: (state) => {
    return state.all
  },
  getSubCategory: (state) => {
    return state.subCategory
  },
  getSubCategoryById: (state) => (id) => {
    return state.all.find((subCategory) => subCategory.id === id)
  },
  getSubCategoriesByCategoryId: (state) => (category_id) => {
    if (!isset(state.all)) return []
    return state.all.filter((subCategory) => subCategory.category_id === category_id)
  },
  getSubCategoryIndexById: (state) => (id) => {
    return state.all.findIndex((subCategory) => subCategory.id === id)
  },
  getSubCategoriesCount: (state) => {
    return state.all.length
  }
}

// actions
const actions = {
  async getSubCategories({ commit }) {
    await subCategory.getSubCategories((data) => {
      commit('setSubCategories', data)
    })
  },
  async getSlimSubCategories({ commit }) {
    await subCategory.getSlimSubCategories((data) => {
      commit('setSubCategories', data)
    })
  },
  async create({ commit }, formData) {
    await subCategory.createSubCategory(formData, (data) => {
      commit('addSubCategory', data)
    })
  },
  async view({ commit, getters }, subCategory_id) {
    commit('setSubCategoryDetails', getters.getSubCategoryById(subCategory_id))
  },
  async edit({ commit, getters }, subCategory_id, formData) {
    // eslint-disable-next-line no-unused-vars
    await subCategory.updateSubCategory(subCategory_id, formData, (data) => {
      commit('updateSubCategory', {
        idx: getters.getSubCategoryIndexById(subCategory.id),
        subCategory: data
      })
    })
  },
  async delete({ commit, getters }, subCategory_id) {
    await subCategory.deleteSubCategory(subCategory_id, () => {
      commit('deleteSubCategory', getters.getSubCategoryIndexById(subCategory.id))
    })
  }
}

// mutations
const mutations = {
  addSubCategory(state, subCategory) {
    state.all.push(subCategory)
  },
  updateSubCategory(state, payload) {
    state.all[payload.idx] = payload.subCategory
  },
  deleteSubCategory(state, idx) {
    state.all.slice(idx, 1)
  },
  setSubCategories(state, subCategories) {
    state.all = subCategories
  },
  setSubCategoryDetails(state, subCategory) {
    state.subCategory = subCategory
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
