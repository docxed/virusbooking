import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/css/style.css"
import "@fortawesome/fontawesome-free/js/all.js"
import "animate.css"

createApp(App).use(router).mount("#app")
