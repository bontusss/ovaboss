import business from '../../resources/api/business'

// initial state
const state = {
  all: [],
  business: {}
}

// getters
const getters = {
  getBusinesses: (state) => {
    return state.all
  },
  getSelectedBusiness: (state) => {
    return state.business
  },
  getBusinessById: (state) => (id) => {
    return state.all.find((business) => business.id === id)
  },
  getBusiness: (state) => {
    return state.all.filter((business) => business.flag === 'business' && business.is_business)
  },
  getAuxiliaryBusinesses: (state) => {
    return state.all.filter((business) => business.flag === 'auxiliary')
  },
  getConsortBusinesses: (state) => {
    return state.all.filter((business) => business.flag === 'consort')
  },
  getBusinessIndexById: (state) => (id) => {
    return state.all.findIndex((business) => business.id === id)
  }
}

// actions
const actions = {
  async create({ commit }, formData) {
    await business.createBusiness(formData, (data) => {
      commit('addBusiness', data.business)
    })
  },
  async edit({ commit, getters }, businessId, formData) {
    await business.updateBusiness(businessId, formData, (data) => {
      commit('updateBusiness', {
        idx: getters.getBusinessIndexById(data.business.id),
        business: data.business
      })
    })
  },
  async delete({ commit, getters }, businessId, formData) {
    await business.updateBusiness(businessId, formData, (data) => {
      commit('deleteBusiness', getters.getBusinessIndexById(data.business.id))
    })
  },
  async getBusinesses({ commit }) {
    await business.getBusinesses((data) => {
      commit('setBusinesses', data)
    })
  },
  async view({ commit, getters }, businessId) {
    commit('setBusinessDetails', getters.getBusinessById(businessId))
  },
  async details({ commit }, businessId) {
    await business.getBusinessDetails(businessId, (data) => {
      commit('setBusinessDetails', data.business)
    })
  }
}

// mutations
const mutations = {
  addBusiness(state, business) {
    state.all.push(business)
  },
  updateBusiness(state, payload) {
    state.all[payload.idx] = payload.business
  },
  deleteBusiness(state, idx) {
    state.all.slice(idx, 1)
  },
  setBusinesses(state, businesses) {
    state.all = businesses
  },
  setBusinessDetails(state, business) {
    state.business = business
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
