import * as dayjs from 'dayjs'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'

export default {
  components: {
    AttachmentsManager,
    MiniToolbar,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    checkboxColor: {
      type: String,
      default: 'secondary',
    },
  },
  methods: {
    calculateDateDiff(date) {
      const today = dayjs().hour(0).minute(0).second(0)
      const givenDate = dayjs(date, 'D/MM/YYYY')
      return givenDate.diff(today, 'day')
    },
    check(data) {
      this.$emit('check', data)
    },
  },
}
