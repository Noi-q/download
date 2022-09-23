import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import {createPinia} from 'pinia'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
