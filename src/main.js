import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/BaseButton.vue';
import BaseCard from './components/BaseCard.vue';
const app=createApp(App)
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.use(store);
app.use(router);
app.mount('#app');
