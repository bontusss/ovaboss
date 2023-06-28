import bill from '@/resources/api/bcc/bill'

// initial state
const state = {
    bills: [],
    bill: {},
}

// getters
const getters = {
    getBills: (state) => {
        return state.bills;
    },
    getBill: (state) => {
        return state.bill;
    },
    getBillById: state => id => {
        return state.bills.find(bill => bill.id === id)
    },
    getBillIndexById: state => id => {
        return state.bills.findIndex(bill => bill.id === id)
    },
}

// actions
const actions = {
    async create({commit}, formData) {
        await bill.createBill(formData, data => {
            commit('addBill', data)
        })
    },
    async edit({commit, getters}, {bill_id, formData}) {
        await bill.updateBill(bill_id, formData, data => {
            commit('updateBill', {
                idx: getters.getBillIndexById(data.bill.id),
                bill: data.bill,
            })
        })
    },
    async delete({commit, getters}, billId, formData) {
        await bill.updateBill(billId, formData, data => {
            commit('deleteBill', getters.getBillIndexById(data.bill.id))
        })
    },
    async getBills({commit}) {
        commit('setBills', []);
        await bill.getBills(data => {
            commit('setBills', data)
        })
    },
    async view({commit, getters}, bill_id) {
        commit('setBillDetails', getters.getBillById(bill_id));
    },
    async details({commit}, billId) {
        await bill.getBillDetails(billId, data => {
            commit('setBillDetails', data.bill)
        })
    },
}

// mutations
const mutations = {
    addBill(state, bill) {
        state.bills.push(bill)
    },
    updateBill(state, payload) {
        state.bills[payload.idx] = payload.bill
    },
    deleteBill(state, idx) {
        state.bills.slice(idx, 1)
    },
    setBills(state, bills) {
        state.bills = bills
    },
    setBillDetails(state, bill) {
        state.bill = bill
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
