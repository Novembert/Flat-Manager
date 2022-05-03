import MonthAndYearPicker from "@/components/MonthAndYearPicker/MonthAndYearPicker.vue"
import CheckableList from "@/components/CheckableList/CheckableList.vue"
import TasksCalendar from "@/components/TasksCalendar/TasksCalendar.vue"
import DefaultFactory from "@/components/factories/DefaultFactory/DefaultFactory.vue"
import { _mockBills } from "./_data"
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
      bills: _mockBills,
      showCallendar: false,
      showBillsFactory: false
    }
  },
  methods: {
    submitAddBill (data) {
      data.deadline = dayjs(data.deadline).format()
      addBill(data)
    },
    getBills () {
      getBillsList({ month: this.month, year: this.year })
    }
  }
}