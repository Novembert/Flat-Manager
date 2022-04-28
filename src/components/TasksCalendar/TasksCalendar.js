import { Calendar } from 'v-calendar';
import * as dayjs from 'dayjs'

const errorColor = '#B00020'
const warningColor = '#FB8C00'

const today =  {
  key: 'today',
  highlight: 'gray',
  dates: new Date()
}

export default {
  components: {
    Calendar
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    attributes () {
      return [...this.parseTasks(this.tasks), today]
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
              backgroundColor: task.checked ? 'green' : diff <= 0 ? diff < 0 ? errorColor : warningColor : 'blue'
            }
          },
          popover: {
            label: task.value ? `${task.value} | ${task.name}` : task.name,
            hideIndicator: true,
          },
        }
      })
    }
  }
}