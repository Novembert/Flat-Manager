import MonthAndYearPicker from "@/components/MonthAndYearPicker/MonthAndYearPicker.vue"
import CheckableList from "@/components/CheckableList/CheckableList.vue"
import { _mockBills } from "./_data"

export default {
  components: {
    MonthAndYearPicker,
    CheckableList
  },
  data () {
    return {
      month: null,
      year: null,
      bills: _mockBills
    }
  }
}