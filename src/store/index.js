import { createStore } from 'vuex'
import auth from './modules/auth'
import bill from './modules/bill'
import business from './modules/business'
import category from './modules/category'
import city from './modules/city'
import country from './modules/country'
import product from './modules/product'
import service from './modules/service'
import state from './modules/state'
import subcategory from './modules/subcategory'
export default createStore({
  modules: {
    auth,
    bill,
    business,
    category,
    city,
    country,
    product,
    service,
    state,
    subcategory
  }
})
