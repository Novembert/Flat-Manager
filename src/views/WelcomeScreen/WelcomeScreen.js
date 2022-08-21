import SectionLink from '@/components/SectionLink/SectionLink.vue'
import { links } from '@/helpers/_globalData'
import { getCountsList, initCount } from '@/services/counter'

export default {
  components: {
    SectionLink,
  },
  data() {
    return {
      links,
      countsUnsubscribe: null,
      counts: null,
    }
  },
  async created() {
    await initCount()
    this.getCounts()
  },
  methods: {
    getCounts() {
      this.countsUnsubscribe = getCountsList(this.parseCounts)
    },
    parseCounts(data) {
      this.counts = data
      this.counts.forEach(({ id, count }) => {
        const index = this.links.findIndex((el) => el.to === id)
        this.links[index].notifications = count
      })
    },
    beforeDestroy() {
      this.countsUnsubscribe()
    },
  },
}
