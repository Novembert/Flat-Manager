import { createStore, createLogger } from 'vuex'
import alerts from './modules/alerts'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    alerts,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
