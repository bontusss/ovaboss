import service from '@/resources/api/bcc/service'

// initial state
const state = {
    services: [],
    service: {},
}

// getters
const getters = {
    getServices: (state) => {
        return state.services;
    },
    getService: (state) => {
        return state.service;
    },
    getServiceById: state => id => {
        return state.services.find(service => service.id === id)
    },
    getServiceIndexById: state => id => {
        return state.services.findIndex(service => service.id === id)
    },
}

// actions
const actions = {
    async create({commit}, formData) {
        await service.createService(formData, data => {
            commit('addService', data)
        })
    },
    async edit({commit, getters}, {service_id, formData}) {
        await service.updateService(service_id, formData, data => {
            commit('updateService', {
                idx: getters.getServiceIndexById(data.service.id),
                service: data.service,
            })
        })
    },
    async delete({commit, getters}, serviceId, formData) {
        await service.updateService(serviceId, formData, data => {
            commit('deleteService', getters.getServiceIndexById(data.service.id))
        })
    },
    async getServices({commit}) {
        commit('setServices', []);
        await service.getServices(data => {
            commit('setServices', data)
        })
    },
    async view({commit, getters}, service_id) {
        commit('setServiceDetails', getters.getServiceById(service_id));
    },
    async details({commit}, serviceId) {
        await service.getServiceDetails(serviceId, data => {
            commit('setServiceDetails', data.service)
        })
    },
}

// mutations
const mutations = {
    addService(state, service) {
        state.services.push(service)
    },
    updateService(state, payload) {
        state.services[payload.idx] = payload.service
    },
    deleteService(state, idx) {
        state.services.slice(idx, 1)
    },
    setServices(state, services) {
        state.services = services
    },
    setServiceDetails(state, service) {
        state.service = service
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
