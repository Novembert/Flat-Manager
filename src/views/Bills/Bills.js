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
      month: null,
      year: null,
      bills: null,
      billsUnsubscribe: null,
      showCallendar: false,
      showBillsFactory: false,
    }
  },
  methods: {
    async submitAddBill (data) {
      data.deadline = new Date(data.deadline)
      data.checked = false
      await addBill(data)
      this.getBills()
      this.showBillsFactory = false
    },
    getBills () {
      this.billsUnsubscribe = getBillsList({ month: this.month + 1, year: this.year }, this.parseBills)
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