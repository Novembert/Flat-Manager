export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: '/'
    },
    icon: {
      type: String,
      default: null
    },
    background: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      notifications: 3
    }
  }
}