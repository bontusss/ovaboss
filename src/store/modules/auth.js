import auth from '@/resources/api/auth'
import { ACCESS_TOKEN_KEY, SESSION_KEY } from '@/resources/api/config'
import { isset, ucwords } from '@/resources/inc/utils'

const defaultProfile = {
  id: 0,
  name: '',
  email: '',
  phone_id: 0,
  pin: '',
  email_verified_at: null,
  sponsor: null,
  parent_pin: null,
  profile_complete: 0,
  created_at: '',
  updated_at: '',
  deleted_at: null,
  pccNext: '',
  pccPrev: '',
  bcc: null,
  detail: null,
  passport_base_url: '',
  nid_base_url: ''
}

// initial state
const state = {
  auth_id: localStorage.getItem(SESSION_KEY) || 0,
  error: {},
  profile: defaultProfile
}

// getters
const getters = {
  isLoggedIn: (state) => {
    return (
      isset(state.auth_id) && isset(state.profile.id) && state.auth_id > 0 && state.profile.id > 0
    )
  },
  getProfile: (state) => {
    return state.profile
  },
  getPccNext: (state) => {
    return state.profile.pccNext
  },
  passport: (state) => {
    if (
      isset(state.profile.detail) &&
      isset(state.profile.passport_base_url) &&
      isset(state.profile.detail.passport)
    )
      return `${state.profile.passport_base_url}${state.profile.detail.passport}`
    return ''
  },
  nid: (state) => {
    if (isset(state.profile.detail) && isset(state.profile.detail.nid))
      return `${state.profile.nid_base_url}${state.profile.detail.nid}`
    return ''
  },
  bccProfiled: (state) => {
    return isset(state.profile.bcc) && isset(state.profile.bcc.profiled)
  },
  profileName: (state) => {
    return ucwords(isset(state.profile.name) ? state.profile.name : '')
  },
  isPccProfileComplete: (state) => {
    return Number(state.profile.profile_complete) === 1
  }
}

// actions
const actions = {
  async register({ commit }, formData) {
    await auth.register(formData, (data) => {
      console.log(data)
      localStorage.setItem(ACCESS_TOKEN_KEY, data.token)
      localStorage.setItem(SESSION_KEY, data.id)
      // const profile = data;
      // delete profile.token;
      commit('setProfile', data.user)
      commit('setAuthId', data.id)
    })
  },
  async login({ commit }, formData) {
    await auth.login(formData, (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.token)
      localStorage.setItem(SESSION_KEY, data.id)
      // const profile = data;
      // delete profile.token;
      commit('setProfile', data.user)
      commit('setAuthId', data.id)
    })
  },
  async refresh({ commit }) {
    await auth.refresh((data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.token)
      localStorage.setItem(SESSION_KEY, data.id)
      // const profile = data;
      // delete profile.token;
      commit('setProfile', data.user)
      commit('setAuthId', data.id)
    })
  },
  async logout({ commit }) {
    await auth.logout(() => {
      localStorage.removeItem(ACCESS_TOKEN_KEY)
      localStorage.removeItem(SESSION_KEY)
      commit('setProfile', defaultProfile)
      commit('setAuthId', '')
    })
  },
  async getProfile({ commit, state }) {
    if (isset(state.profile.id) && state.profile.id > 1) return
    await auth.getProfile((data) => {
      commit('setProfile', data)
    })
  }
}

// mutations
const mutations = {
  setProfile(state, profile) {
    state.profile = profile
  },
  setAuthId(state, id) {
    state.auth_id = id
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
