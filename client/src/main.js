import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/js/all.js';
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

createApp(App).use(router).component('ThailandAutoComplete', ThailandAutoComplete).mount('#app')
