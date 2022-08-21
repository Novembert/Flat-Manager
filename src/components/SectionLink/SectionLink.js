export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: 'welcome',
    },
    icon: {
      type: [Array, String],
      default: null,
    },
    background: {
      type: String,
      default: '',
    },
    notifications: {
      type: Number,
      default: null,
    },
  },
  computed: {
    destination() {
      return {
        name: this.to,
      }
    },
  },
}
