import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/style-01.css';
import './assets/css/style-02.css';
import './assets/css/style-03.css';
import './assets/css/style-04.css';
import './assets/css/style-05.css';
import './assets/css/style-06.css';
import './assets/css/style-07.css';
import './assets/css/style-08.css';
import './assets/css/style-09.css';
import './assets/css/style-10.css';
import './assets/css/style-11.css';
import './assets/css/style-12.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
