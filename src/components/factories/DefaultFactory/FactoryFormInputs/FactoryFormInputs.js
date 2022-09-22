import { DatePicker } from 'v-calendar'
import Scheduler from '../Scheduler/Scheduler.vue'

export default {
  components: {
    DatePicker,
    Scheduler,
  },
  props: {
    inputs: {
      type: Array,
      default: null,
    },
    modelValue: {
      type: Object,
      default: null,
      required: true,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
