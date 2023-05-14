import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
// import BootstrapVue  from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './components/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes';

const router =  createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
// app.use(BootstrapVue)
app.mount('#app')

// createApp(App).mount('#app')
