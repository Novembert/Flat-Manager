import { generateMonths, generateYears } from "@/_utils"
import * as dayjs from 'dayjs'

export default {
  props: {
    month: {
      type: [String, Number],
      default: null,
    },
    year: {
      type: [String, Number],
      default: null,
    }
  },
  data () {
    return {
      months: generateMonths(),
      years: generateYears(),
    }
  },
  computed: {
    pickedMonth: {
      get () { return this.month },
      set (value) { this.$emit('update:month', value) }
    },
    pickedYear: {
      get () { return this.year },
      set (value) { this.$emit('update:year', value) }
    }
  },
  created () {
    this.pickedMonth = dayjs().month()
    this.pickedYear = dayjs().year()
  }
}