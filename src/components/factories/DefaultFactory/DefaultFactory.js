import { defaultInputs } from './_data'
import FactoryFormInputs from './FactoryFormInputs/FactoryFormInputs.vue'
import { mapActions } from 'vuex'

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
    ...mapActions('alerts', ['addAlert']),
    submitForm() {
      if (this.valid) {
        this.$emit('on-submit', this.formData)
        this.formData = {}
      } else {
        this.addAlert({
          id: 'FACTORY-INVALID',
          content: 'Proszę wypełnić wszystkie wymagane pola',
          type: 'error',
        })
      }
    },
    cancel() {
      this.formData = {}
      this.isOpen = false
    },
  },
}
