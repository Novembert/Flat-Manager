import { inputs, inputsMapping } from './_data'

export default {
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        scheduleType: null,
        'nth-month': 1,
        'nth-day': 1,
        'nth-weekday': 1,
        'nth-week': 1,
      }),
    },
  },
  data: () => ({
    inputs,
  }),
  computed: {
    mappedInputs() {
      return this.computedScheduleConfig?.scheduleType ? inputsMapping[this.computedScheduleConfig.scheduleType] : []
    },
    computedScheduleConfig: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
