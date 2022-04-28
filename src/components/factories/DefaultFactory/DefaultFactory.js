export default {
  props: {
    factoryTitle: {
      type: String,
      default: null
    },
    hide: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      open: false,
    }
  }
}