import CheckableList from '@/components/CheckableList/CheckableList.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { generateNewAttachmentsArray } from '@/helpers/_utils'
import * as dayjs from 'dayjs'
import { clone } from 'lodash'
import TasksController from '@/services/TasksController'

export default {
  components: {
    CheckableList,
    DefaultFactory,
    MiniToolbar,
    AttachmentsManager,
    TasksBoard,
  },
  props: {
    collection: {
      type: String,
      default: null,
      required: true,
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
    errorMessages: {
      type: Object,
      default: () => ({
        editTaskMessage: 'Wystąpił niespodziewany błąd podczas edytowania zadania',
        addTaskMessage: 'Wystąpił niespodziewany błąd podczas dodawania zadania',
        getTasksMessage: 'Wystąpił niespodziewany błąd podczas pobierania listy zadań',
        deleteTaskMessage: 'Wystąpił niespodziewany błąd podczas usuwania zadania',
      }),
    },
    factoryConfig: {
      type: Object,
      default: () => ({
        hide: [],
        editTask: 'Edytuj zadanie',
        addTask: 'Dodaj zadanie',
      }),
    },
    checkColor: {
      type: String,
      default: 'blue-grey darken-1',
    },
  },
  data() {
    return {
      range: {
        month: null,
        year: null,
      },
      tasks: null,
      tasksUnsubscribe: null,
      showTasksFactory: false,
      tasksFormData: {},
      editMode: false,
    }
  },
  watch: {
    range: {
      deep: true,
      handler() {
        this.getTasks()
      },
    },
    tasksControllerInstance: {
      handler() {
        this.getTasks()
      },
    },
  },
  computed: {
    tasksControllerInstance() {
      return new TasksController(this.collection, this.label)
    },
  },
  methods: {
    submitTasksFactory(submittedData) {
      const data = clone(submittedData)
      data.deadline = new Date(data.deadline)
      data.checked = false
      this.showTasksFactory = false
      this.editMode
        ? this.tasksControllerInstance.editTask(data.id, data, this.errorMessages.editTaskMessage)
        : this.tasksControllerInstance.addTask(data, this.errorMessages.addTaskMessage)
      this.editMode = false
    },
    getTasks() {
      this.tasksControllerInstance.getTasksList(
        { month: this.range.month, year: this.range.year },
        this.parseTasks,
        this.errorMessages.getTasksMessage
      )
    },
    parseTasks(tasksList) {
      this.tasks = tasksList.map((task) => ({
        ...task,
        deadline: dayjs(task.deadline).format('DD/MM/YYYY'),
      }))
    },
    checkTask({ id, checked }) {
      this.tasksControllerInstance.editTask(id, { checked }, this.errorMessages.editTaskMessage)
    },
    openEditTask(submittedData) {
      const data = clone(submittedData)
      data.deadline = dayjs(data.deadline, 'DD/MM/YYYY')
      data.deadline = data.deadline.format('YYYY-MM-DD')
      this.tasksFormData = data
      this.editMode = true
      this.showTasksFactory = true
    },
    async taskFilesChange(data) {
      const task = data.task
      const files = data.files
      const newFiles = await generateNewAttachmentsArray(task, files)

      this.tasksControllerInstance.editTask(task.id, { files: newFiles }, this.errorMessages.editTaskMessage)
    },
  },
}
