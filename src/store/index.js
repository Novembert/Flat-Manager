import { createStore, createLogger } from 'vuex'
import alerts from './modules/alerts'
import loader from './modules/loader'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    alerts,
    loader,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store
