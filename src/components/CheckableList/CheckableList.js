import * as dayjs from 'dayjs'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'

export default {
  components: {
    AttachmentsManager
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    checkboxColor: {
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    computedItems: {
      get () { return this.items },
      set (value) { this.$emit('update:items', value) }
    },
  },
  methods: {
    calculateDateDiff (date) {
      const today = dayjs().hour(0).minute(0).second(0)
      const givenDate = dayjs(date, 'D/MM/YYYY')
      return givenDate.diff(today, 'day')
    },
    check(data) {
      this.$emit('check', data)
    }
  }
}