import { createApp } from 'vue'
import { RouterView } from 'vue-router'
// import store from '../store'
import router from './router'

const app = createApp(RouterView)
app.use(router)
// app.use(store)
app.mount('#app')
