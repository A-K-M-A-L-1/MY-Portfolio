import { createApp } from 'vue'
import './assets/output.css'
import router from "./routes/index.js";
import App from './App.vue'

const app = createApp(App)

// Correctly use the router with the app instance
app.use(router)

app.mount('#app')
