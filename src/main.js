import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import revel from '@rebilly/revel';
import { router } from './router';

const app = createApp(App);

app.use(revel);
app.use(router);
app.mount('#app');

let { redirect } = sessionStorage;
delete sessionStorage.redirect;

if (redirect && redirect !== location.pathname) {
    redirect = redirect.replace(import.meta.env.BASE_URL, '/');
    router.replace(redirect);
}
