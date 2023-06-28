import Category from '../../api/store/Category'
const category = new Category();
import {empty, isset} from '../../inc/utils'

// initial state
const state = {
    all: [],
    category: {},
}

// getters
const getters = {
    isCategoriesEmpty: state => {
        return empty(state.all);
    },
    getCategories: state => {
        return state.all
    },
    getCategory: state => {
        return state.category
    },
    getCategoryById: state => id => {
        return state.all.find(category => Number(category.id) === Number(id))
    },
    getProductCategories: state => {
        if (!isset(() => state.all)) return [];
        return state.all.filter(category => Number(category.product_type_id) === 1)
    },
    getServiceCategories: state => {
        if (!isset(() => state.all)) return [];
        return state.all.filter(category => Number(category.product_type_id) === 2)
    },
    getBillCategories: state => {
        if (!isset(() => state.all)) return [];
        return state.all.filter(category => Number(category.product_type_id) === 3)
    },
    getCategoryIndexById: state => id => {
        return state.all.findIndex(category => category.id === id)
    },
    getCategoriesCount: state => {
        return state.all.length
    },
}

// actions
const actions = {
    async getCategories({commit}) {
        await category.getCategories(data => {
            commit('setCategories', data)
        })
    },
    async getSlimCategories({commit}) {
        await category.getSlimCategories(data => {
            commit('setCategories', data)
        })
    },
}

// mutations
const mutations = {
    setCategories(state, categories) {
        state.all = categories
    },
    setCategoryDetails(state, category) {
        state.category = category
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
