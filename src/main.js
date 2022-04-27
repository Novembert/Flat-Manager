import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as dayjs from 'dayjs'
import 'dayjs/locale/pl' // import locale

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


dayjs.locale('pl') // use locale

library.add(fas);
library.add(far);

loadFonts()


const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vuetify)
  .use(router)

app.mount('#app')