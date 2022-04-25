export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: 'welcome'
    },
    icon: {
      type: [Array, String],
      default: null
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    destination () {
      return {
        name: this.to
      }
    }
  },
  data () {
    return {
      notifications: 3
    }
  }
}