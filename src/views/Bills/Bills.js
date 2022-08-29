import MonthAndYearPicker from '@/components/MonthAndYearPicker/MonthAndYearPicker.vue'
import CheckableList from '@/components/CheckableList/CheckableList.vue'
import TasksCalendar from '@/components/TasksCalendar/TasksCalendar.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { addBill, getBillsList, editBill, deleteBill } from '@/services/bills'
import { generateNewAttachmentsArray } from '@/helpers/_utils'
import * as dayjs from 'dayjs'
import { clone } from 'lodash'

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
      billsFormData: {},
      editMode: false,
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
    submitBillFactory(submittedData) {
      const data = clone(submittedData)
      data.deadline = new Date(data.deadline)
      data.checked = false
      this.showBillsFactory = false
      this.editMode ? editBill(data.id, data) : addBill(data)
      this.editMode = false
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
    openEditBill(submittedData) {
      const data = clone(submittedData)
      data.deadline = dayjs(data.deadline, 'DD/MM/YYYY')
      data.deadline = data.deadline.format('YYYY-MM-DD')
      this.billsFormData = data
      this.editMode = true
      this.showBillsFactory = true
    },
    async billFilesChange(data) {
      const bill = data.bill
      const files = data.files
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
