import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createAuth0 } from '@auth0/auth0-vue';

createApp(App)
.use(store)
.use(router)
.use(createAuth0({
    domain: "dev-o64menff2rpsedy7.us.auth0.com",
    clientId: "HZKIfBBLSRrVjy3lSQ3OglOelCVl3tvY",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
})).mount('#app')
