import { createStore, createLogger } from 'vuex'
import alerts from './modules/alerts'
import loader from './modules/loader'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    alerts,
    loader,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store
