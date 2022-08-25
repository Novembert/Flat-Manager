import MonthAndYearPicker from '@/components/MonthAndYearPicker/MonthAndYearPicker.vue'
import CheckableList from '@/components/CheckableList/CheckableList.vue'
import TasksCalendar from '@/components/TasksCalendar/TasksCalendar.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { addBill, getBillsList, editBill, deleteBill } from '@/services/bills'
import { generateNewAttachmentsArray } from '@/helpers/_utils'
import * as dayjs from 'dayjs'

export default {
  components: {
    MonthAndYearPicker,
    CheckableList,
    TasksCalendar,
    DefaultFactory,
    MiniToolbar,
    AttachmentsManager,
  },
  data() {
    return {
      range: {
        month: null,
        year: null,
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
      handler() {
        this.getBills()
      },
    },
  },
  methods: {
    submitAddBill(data) {
      data.deadline = new Date(data.deadline)
      data.checked = false
      this.showBillsFactory = false
      addBill(data)
    },
    getBills() {
      this.billsUnsubscribe = getBillsList({ month: this.range.month, year: this.range.year }, this.parseBills)
    },
    parseBills(billsList) {
      this.bills = billsList.map((bill) => ({
        ...bill,
        deadline: dayjs(bill.deadline).format('DD/MM/YYYY'),
      }))
    },
    checkBill({ id, checked }) {
      editBill(id, { checked })
    },
    async billFilesChange(data) {
      const bill = data.bill
      const files = data.files
      console.log('files', files)
      const newFiles = await generateNewAttachmentsArray(bill, files)

      editBill(bill.id, { files: newFiles })
    },
    deleteBill,
  },
  mounted() {
    this.getBills()
  },
  beforeDestroy() {
    this.billsUnsubscribe()
  },
}
