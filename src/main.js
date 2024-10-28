import './assets/main.css'
import "preline/preline"
import uiElement from './ui-element'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

uiElement.map(component => app.component(component.name, component))
app.use(router)
app.use(store)

app.mount('#app')
