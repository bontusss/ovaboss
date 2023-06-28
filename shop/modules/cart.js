import ShoppingCartApi from "@/resources/api/store/ShoppingCart";
import {empty, isset} from "../../inc/utils";

const shoppingCartApi = new ShoppingCartApi();

const loadCartData = async (commit) => {
    await shoppingCartApi.getShoppingCartDetails(response => {
        commit('updateDetails', response);
    });
};

// initial state
const state = {
    products: [],
    summary: {},
    message: '',
};

// getters
const getters = {
    count: (state) => {
        return state.summary.total_quantity;
    },
    getProducts: (state) => {//TODO Update this
        // return Array.from(state.products).values();
        const temp = [];
        for (let [key, value] of Object.entries(state.products)) {
            if (!empty(key)) temp.push(value);
        }
        return temp;
    },
    getSummary: (state) => {
        return state.summary;
    },
    getAddedToCartMessage: (state) => {
        return state.message;
    },
}

// actions
const actions = {
    async addToCart({commit}, payload) {
        await shoppingCartApi.addToCart(payload, data => {
            if (isset(() => data.item) && data.item.id) {
                commit('updateRow', data);
            }
            commit('updateAddedToCartMessage', data.item.name + " has been successfully added to cart! \n\r\n\rTotal Quantity: " +
                data.item.quantity);
            const addedToCartModal = $('#ProductAddToCartModal');
            addedToCartModal.modal();
            setTimeout(()=> addedToCartModal.modal('hide'), 1500);
            // payload.cb(data.item);
        });
    },
    clearAddedToCartMessage({commit}) {
        commit('updateAddedToCartMessage', '');
    },
    async updateCart({commit}, formData) {
        await shoppingCartApi.updateCart(formData, _ => {
            loadCartData(commit);
        });
    },
    async removeFromCart({commit}, product_id) {
        await shoppingCartApi.removeFromCart(product_id, _ => {
            loadCartData(commit);
        });
    },
    async getCount({commit, state}) {
        if (state.products.length) return;
        await loadCartData(commit);
    },
    async getCartDetails({commit, state}) {
        if (state.products.length) return;
        await loadCartData(commit);
    },
};

// mutations
const mutations = {
    updateDetails(state, data) {
        state.products = data.items;
        state.summary = data.summary;
    },
    updateAddedToCartMessage(state, data) {
        state.message = data;
    },
    updateRow(state, data) {
        // console.log("Old: ", state.summary.total_quantity, " New: ", data.total_quantity);
        state.summary.total_quantity = data.total_quantity;
        state.products[data.id] = data.item;
    },
    removeRow(state, data) {
        state.products.splice(data, 1);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
