import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDk23O6XTaZVZ7o9ZFuso2XDpCQcYS5xwk",
    authDomain: "rmpro-2dd41.firebaseapp.com",
    projectId: "rmpro-2dd41",
    storageBucket: "rmpro-2dd41.appspot.com",
    messagingSenderId: "477366943429",
    appId: "1:477366943429:web:f68d73bd329edbc8e23aac",
    measurementId: "G-E1Q9KFHTFH"
};
const apps = initializeApp(firebaseConfig);
const analytics = getAnalytics(apps);

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)
app.use(Notifications)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')