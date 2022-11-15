import MonthAndYearPicker from '@/components/MonthAndYearPicker/MonthAndYearPicker.vue'
import TasksCalendar from '@/components/TasksCalendar/TasksCalendar.vue'

export default {
  components: {
    MonthAndYearPicker,
    TasksCalendar,
  },
  props: {
    range: {
      type: Object,
      default: {},
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showCallendar: false,
    }
  },
  computed: {
    computedRange: {
      get() {
        return this.range
      },
      set(value) {
        this.$emit('update:range', value)
      },
    },
  },
}
