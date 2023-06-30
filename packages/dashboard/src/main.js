import { createApp } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
// import store from './store'

const app = createApp(RouterView)
app.use(router)
// app.use(store)
app.mount('#app')
