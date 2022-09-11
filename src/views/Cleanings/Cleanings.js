import CheckableList from '@/components/CheckableList/CheckableList.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { addCleaning, getCleaningsList, editCleaning, deleteCleaning } from '@/services/cleanings'
import { generateNewAttachmentsArray } from '@/helpers/_utils'
import * as dayjs from 'dayjs'
import { clone } from 'lodash'

export default {
  components: {
    CheckableList,
    DefaultFactory,
    MiniToolbar,
    AttachmentsManager,
    TasksBoard,
  },
  data() {
    return {
      range: {
        month: null,
        year: null,
      },
      cleanings: null,
      cleaningsUnsubscribe: null,
      showCleaningsFactory: false,
      cleaningsFormData: {},
      editMode: false,
    }
  },
  watch: {
    range: {
      deep: true,
      handler() {
        this.getCleanings()
      },
    },
  },
  methods: {
    submitCleaningFactory(submittedData) {
      console.log('test')
      const data = clone(submittedData)
      data.deadline = new Date(data.deadline)
      data.checked = false
      this.showCleaningsFactory = false
      this.editMode ? editCleaning(data.id, data) : addCleaning(data)
      this.editMode = false
    },
    getCleanings() {
      this.cleaningsUnsubscribe = getCleaningsList(
        { month: this.range.month, year: this.range.year },
        this.parseCleanings
      )
    },
    parseCleanings(cleaningsList) {
      this.cleanings = cleaningsList.map((cleaning) => ({
        ...cleaning,
        deadline: dayjs(cleaning.deadline).format('DD/MM/YYYY'),
      }))
    },
    checkCleaning({ id, checked }) {
      editCleaning(id, { checked })
    },
    openEditCleaning(submittedData) {
      const data = clone(submittedData)
      data.deadline = dayjs(data.deadline, 'DD/MM/YYYY')
      data.deadline = data.deadline.format('YYYY-MM-DD')
      this.cleaningsFormData = data
      this.editMode = true
      this.showCleaningsFactory = true
    },
    async cleaningFilesChange(data) {
      const cleaning = data.cleaning
      const files = data.files
      const newFiles = await generateNewAttachmentsArray(cleaning, files)

      editCleaning(cleaning.id, { files: newFiles })
    },
    deleteCleaning,
  },
  mounted() {
    this.getCleanings()
  },
  beforeDestroy() {
    this.cleaningsUnsubscribe()
  },
}
