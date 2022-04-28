import { links } from "@/helpers/_globalData"

export default {
  props: {
    open: {
      type: Boolean,
      default:false
    }
  },
  computed: {
    drawer: {
      get () { return this.open },
      set (value) {
        this.$emit('update:open', value)
      }
    }
  },
  data () {
    return {
      links
    }
  }
}