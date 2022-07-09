import { defaultInputs } from './_data'
import FactoryFormInputs from './FactoryFormInputs/FactoryFormInputs.vue'

export default {
  components: {
    FactoryFormInputs,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    factoryTitle: {
      type: String,
      default: null,
    },
    hide: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formData: {},
      valid: null,
    }
  },
  computed: {
    filteredInputs() {
      return defaultInputs.filter((el) => !(el.name in this.hide))
    },
    isOpen: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('update:open', value)
      },
    },
  },
  methods: {
    submitForm() {
      if (this.valid) {
        this.$emit('on-submit', this.formData)
      }
    },
    cancel() {
      this.formData = {}
      this.isOpen = false
    },
  },
}
