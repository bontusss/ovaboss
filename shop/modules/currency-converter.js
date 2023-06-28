import {CURRENCY_LS_KEY, formatPriceWithCode, isset, empty, money} from "../../inc/utils";
import fxApi from '@/resources/api/fx'

// initial state
const state = {
    userCurrencyCode: '',
    base: '',
    rates: [],
};

// getters
const getters = {
    getUserCurrencyCode: (state) => {
        return state.userCurrencyCode;
    },
    getCurrencies: (state) => {
        let currencies = [];
        state.rates.forEach((rate, index) => {
            currencies.push(Object.keys(rate)[0]);
        });
        return currencies;
    },
}

// actions
const actions = {
    initConverter({commit}) {
        fxApi.getRatesJson(response => {
            commit('updateMoneyConfigs', response);
        }).catch(() => {
            commit('updateMoneyConfigs', {
                base: "USD",
                rates: {
                    "EUR": 0.84,
                    "GBP": 0.77,
                    "NGN": 365.00,
                    "JPY": 104.50,
                    "USD": 1,
                }
            });
        }).finally(() => {
            commit('updateDefaultCurrency', localStorage.getItem(`${CURRENCY_LS_KEY}`));
        });
    },
    updateCurrency({commit}, toCurrencyCode) {
        commit('updateDefaultCurrency', toCurrencyCode);
    },
};

// mutations
const mutations = {
    updateMoneyConfigs(state, data) {
        state.base = data.base;
        state.rates = data.rates;
        money.settings.from = state.base;
        money.base = state.base;
        money.rates = state.rates;
    },
    updateDefaultCurrency(state, toCurrencyCode) {
        if (empty(toCurrencyCode))
            toCurrencyCode = state.base;
        state.userCurrencyCode = toCurrencyCode;
        localStorage.setItem(`${CURRENCY_LS_KEY}`, toCurrencyCode);
        // if (!(isset(() => money.rates) && (money.rates === state.rates))) {
        // }
        console.log("money.base: ", money.base, "state.base: ", state.base,
            "money.rates: ", money.rates, "state.rates: ",
            state.rates, "toCurrencyCode: ", toCurrencyCode
        );
        $('body').find('.fx-price').each(function () { // run all price wrapper
            const priceHolder = $(this);
            const newPrice = money(priceHolder.data('price')).to(`${toCurrencyCode}`);
            priceHolder.html(formatPriceWithCode(newPrice, toCurrencyCode));
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
