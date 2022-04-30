import { defaultInputs } from './_data'
import FactoryFormInputs from './FactoryFormInputs/FactoryFormInputs.vue'

export default {
  components: {
    FactoryFormInputs
  },
  props: {
    factoryTitle: {
      type: String,
      default: null
    },
    hide: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      open: false,
      formData: {},
      valid: null,
    }
  },
  computed: {
    filteredInputs () {
      return defaultInputs.filter(el => !(el.name in this.hide))
    }
  },
}