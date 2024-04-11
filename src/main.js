import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import revel from '@rebilly/revel';
import { router } from './router';

const app = createApp(App);

app.use(revel);
app.use(router);
app.mount('#app');
