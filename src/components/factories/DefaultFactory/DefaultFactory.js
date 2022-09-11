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
    initData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      valid: null,
    }
  },
  computed: {
    filteredInputs() {
      return defaultInputs.filter((el) => !this.hide.includes(el.name))
    },
    isOpen: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('update:open', value)
      },
    },
    formData: {
      get() {
        return this.initData
      },
      set(value) {
        this.$emit('update:init-data', value)
      },
    },
  },
  methods: {
    ...mapActions('alerts', ['addAlert']),
    async submitForm() {
      const validation = await this.$refs['form'].validate()
      this.valid = validation.valid
      if (this.valid === true) {
        console.log('test')
        this.$emit('on-submit', this.formData)
        this.formData = {}
        this.valid = null
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
      this.valid = null
      this.isOpen = false
      this.$emit('cancel')
    },
  },
}
