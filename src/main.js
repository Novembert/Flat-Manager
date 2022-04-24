import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router.js'

loadFonts()


const app = createApp(App)
  .use(vuetify)
  .use(router)

app.mount('#app')