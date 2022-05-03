import MonthAndYearPicker from "@/components/MonthAndYearPicker/MonthAndYearPicker.vue"
import CheckableList from "@/components/CheckableList/CheckableList.vue"
import TasksCalendar from "@/components/TasksCalendar/TasksCalendar.vue"
import DefaultFactory from "@/components/factories/DefaultFactory/DefaultFactory.vue"
import { addBill, getBillsList } from "@/services/bills"
import * as dayjs from 'dayjs'

export default {
  components: {
    MonthAndYearPicker,
    CheckableList,
    TasksCalendar,
    DefaultFactory
  },
  data () {
    return {
      range: {
        year: null,
        month: null
      },
      bills: null,
      billsUnsubscribe: null,
      showCallendar: false,
      showBillsFactory: false,
    }
  },
  watch: {
    range: {
      deep: true,
      handler () {
        this.getBills()
      }
    }
  },
  methods: {
    async submitAddBill (data) {
      data.deadline = new Date(data.deadline)
      data.checked = false
      await addBill(data)
      this.showBillsFactory = false
    },
    async getBills () {
      this.billsUnsubscribe = await getBillsList({ month: this.range.month + 1, year: this.range.year }, this.parseBills)
    },
    parseBills (billsList) {
      this.bills = billsList.map(bill => ({ ...bill, deadline: dayjs(bill.deadline).format('DD/MM/YYYY') }))
    }
  },
  mounted () {
    this.getBills()
  },
  beforeDestroy () {
    this.billsUnsubscribe()
  }
}