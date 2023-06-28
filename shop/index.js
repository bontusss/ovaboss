import { createStore } from "vuex";

import auth from './modules/auth'
import bill from './modules/bill'
import business from './modules/business'
import cart from './modules/cart'
import category from './modules/category'
import currency_converter from './modules/currency-converter'
import product from './modules/product'
import service from './modules/service'

export default createStore({
  auth,
  bill,
  business,
  cart,
  category,
  currency_converter,
  product,
  service
})