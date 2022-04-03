import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'

const app: any = createApp(App)
app.use(Element)
app.use(store)
app.use(router)
app.use(router)
app.mount('#app')
// window.globalThis.vm = app