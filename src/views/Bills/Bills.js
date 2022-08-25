import MonthAndYearPicker from '@/components/MonthAndYearPicker/MonthAndYearPicker.vue'
import CheckableList from '@/components/CheckableList/CheckableList.vue'
import TasksCalendar from '@/components/TasksCalendar/TasksCalendar.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { addBill, getBillsList, editBill, deleteBill } from '@/services/bills'
import { findNewAttachments, findAttachmentsToDelete } from '@/helpers/_utils'
import { saveFile, deleteFile } from '@/services/storage'
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
      const filesToSave = findNewAttachments(files.old, files.new)
      const filesSavePromises = filesToSave.map((file) => saveFile(file))
      const savedFiles = await Promise.all(filesSavePromises)

      const filesToDelete = findAttachmentsToDelete(files.old, files.new)
      const filesDeletePromises = filesToDelete.map((file) => deleteFile(file))
      const deletedFilesNames = await Promise.all(filesDeletePromises)

      const unchangedFiles = bill.files ? bill.files.filter((file) => !deletedFilesNames.includes(file.name)) : []

      const newFiles = [...savedFiles, ...unchangedFiles]
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
