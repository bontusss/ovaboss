import city from '@/resources/api/city'
import { isset } from '@/resources/inc/utils'

// initial state
const state = {
  all: [],
  city: {}
}

// getters
const getters = {
  getCities: (state) => {
    return state.all
  },
  getCity: (state) => {
    return state.city
  },
  getCityById: (state) => (id) => {
    return state.all.find((city) => city.id === id)
  },
  getCitiesByState: (state) => (schState) => {
    if (!isset(state.all)) return []
    return state.all.filter((city) => `${city.state}` === schState)
  },
  getCityIndexById: (state) => (id) => {
    return state.all.findIndex((city) => city.id === id)
  },
  getCitiesCount: (state) => {
    return state.all.length
  }
}

// actions
const actions = {
  async getCities({ commit }) {
    await city.getCities((data) => {
      commit('setCities', data)
    })
  },
  async getSlimCities({ commit }) {
    await city.getSlimCities((data) => {
      commit('setCities', data)
    })
  },
  async create({ commit }, formData) {
    await city.createCity(formData, (data) => {
      commit('addCity', data)
    })
  },
  async view({ commit, getters }, city_id) {
    commit('setCityDetails', getters.getCityById(city_id))
  },
  async edit({ commit, getters }, city_id, formData) {
    // eslint-disable-next-line no-unused-vars
    await city.updateCity(city_id, formData, (data) => {
      commit('updateCity', {
        idx: getters.getCityIndexById(city.id),
        city: data
      })
    })
  },
  async delete({ commit, getters }, city_id) {
    await city.deleteCity(city_id, () => {
      commit('deleteCity', getters.getCityIndexById(city.id))
    })
  }
}

// mutations
const mutations = {
  addCity(state, city) {
    state.all.push(city)
  },
  updateCity(state, payload) {
    state.all[payload.idx] = payload.city
  },
  deleteCity(state, idx) {
    state.all.slice(idx, 1)
  },
  setCities(state, cities) {
    state.all = cities
  },
  setCityDetails(state, city) {
    state.city = city
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
