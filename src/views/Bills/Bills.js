import MonthAndYearPicker from "@/components/MonthAndYearPicker/MonthAndYearPicker.vue"
import CheckableList from "@/components/CheckableList/CheckableList.vue"
import TasksCalendar from "@/components/TasksCalendar/TasksCalendar.vue"
import DefaultFactory from "@/components/factories/DefaultFactory/DefaultFactory.vue"
import { _mockBills } from "./_data"

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
      showCallendar: false
    }
  }
}