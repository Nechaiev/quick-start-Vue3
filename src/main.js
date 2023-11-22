import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from "@/routers/rourer.js";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)// плагін бере змінну і міняє на тру якщо е в стор
app.use(router)
app.use(pinia)
app.mount('#app')