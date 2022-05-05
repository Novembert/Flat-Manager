import { Calendar } from 'v-calendar';
import { today, errorColor, defaultColor, warningColor } from './_data'
import * as dayjs from 'dayjs'

export default {
  components: {
    Calendar
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    range: {
      type: Object,
      default: null,
      required: true
    }
  },
  watch: {
    range: {
      deep: true,
      handler (value) {
        this.calendar.move({ ...value })
      }
    }
  },
  computed: {
    attributes () {
      return [...this.parseTasks(this.tasks), today]
    }
  },
  data () {
    return {
      calendar: null
    }
  },
  methods: {
    parseTasks (tasks) {
      return tasks.map(task => {
        const today = dayjs().hour(0).minute(0).second(0)
        const givenDate = dayjs(task.deadline, 'D/MM/YYYY')
        const diff = givenDate.diff(today, 'day')

        return {
          dates: new Date(givenDate.get('year'), givenDate.get('month'), givenDate.get('date')),
          dot: {
            style: {
              backgroundColor: task.checked ? 'green' : diff <= 0 ? diff < 0 ? errorColor : warningColor : defaultColor
            }
          },
          popover: {
            label: task.value ? `${task.value} ${task.currency} | ${task.name}` : task.name,
            hideIndicator: true,
          },
        }
      })
    }
  },
  mounted () {
    this.calendar = this.$refs.calendar
  }
}