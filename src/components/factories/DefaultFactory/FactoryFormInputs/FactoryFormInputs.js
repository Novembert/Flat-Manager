import { DatePicker } from 'v-calendar';

export default {
  components: {
    DatePicker
  },
  props: {
    inputs: {
      type: Array,
      default: null
    },
    modelValue: {
      type: Object,
      default: null,
      required: true
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}