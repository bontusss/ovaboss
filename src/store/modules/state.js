import stateApi from '../../resources/api/state'
import { isset } from '@/resources/inc/utils'

// initial state
const state = {
  all: [],
  state: {}
}

// getters
const getters = {
  getStates: (state) => {
    return state.all
  },
  getState: (state) => {
    return state.state
  },
  getStateById: (state) => (id) => {
    return state.all.find((state) => state.id === id)
  },
  getStatesByCountry: (state) => (country_id) => {
    if (!isset(state.all)) return []
    return state.all.filter((s) => s.country_id === country_id)
  },
  getStateIndexById: (state) => (id) => {
    return state.all.findIndex((state) => state.id === id)
  },
  getStatesCount: (state) => {
    return state.all.length
  }
}

// actions
const actions = {
  async getStates({ commit }) {
    await stateApi.getStates((data) => {
      commit('setStates', data)
    })
  },
  async getSlimStates({ commit }) {
    await stateApi.getSlimStates((data) => {
      commit('setStates', data)
    })
  },
  async create({ commit }, formData) {
    await stateApi.createState(formData, (data) => {
      commit('addState', data)
    })
  },
  async view({ commit, getters }, state_id) {
    commit('setStateDetails', getters.getStateById(state_id))
  },
  async edit({ commit, getters }, state_id, formData) {
    // eslint-disable-next-line no-unused-vars
    await stateApi.updateState(state_id, formData, (data) => {
      commit('updateState', {
        idx: getters.getStateIndexById(state.id),
        state: data
      })
    })
  },
  async delete({ commit, getters }, state_id) {
    await stateApi.deleteState(state_id, () => {
      commit('deleteState', getters.getStateIndexById(state.id))
    })
  }
}

// mutations
const mutations = {
  addState(state, newState) {
    state.all.push(newState)
  },
  updateState(state, payload) {
    state.all[payload.idx] = payload.state
  },
  deleteState(state, idx) {
    state.all.slice(idx, 1)
  },
  setStates(state, states) {
    state.all = states
  },
  setStateDetails(state, newState) {
    state.state = newState
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
