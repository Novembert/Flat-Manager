import CheckableList from '@/components/CheckableList/CheckableList.vue'
import AttachmentsManager from '@/components/AttachmentsManager/AttachmentsManager.vue'
import MiniToolbar from '@/components/MiniToolbar/MiniToolbar.vue'
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue'
import DefaultFactory from '@/components/factories/DefaultFactory/DefaultFactory.vue'
import { generateNewAttachmentsArray } from '@/helpers/_utils'
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
        editTaskMessage: 'An error occured while editing the task',
        addTaskMessage: 'An error occured while creating the task',
        getTasksMessage: 'An error occured while loading the tasks list',
        deleteTaskMessage: 'An error occured while deleting the task',
      }),
    },
    factoryConfig: {
      type: Object,
      default: () => ({
        hide: [],
        editTask: 'Edit task',
        addTask: 'Add task',
      }),
    },
    checkColor: {
      type: String,
      default: 'blue-grey darken-1',
    },
  },
  data() {
    return {
      tasks: null,
      tasksUnsubscribe: null,
      showTasksFactory: false,
      tasksFormData: {},
      editMode: false,
    }
  },
  computed: {
    tasksControllerInstance() {
      return new TasksController(this.collection, this.label)
    },
  },
  methods: {
    submitTasksFactory(submittedData) {
      const data = clone(submittedData)
      data.checked = false
      this.showTasksFactory = false
      this.editMode
        ? this.tasksControllerInstance.editTask(data.id, data, this.errorMessages.editTaskMessage)
        : this.tasksControllerInstance.addTask(data, this.errorMessages.addTaskMessage)
      this.editMode = false
    },
    getTasks() {
      this.tasksControllerInstance.getAllTasksList(this.parseTasks, this.errorMessages.getTasksMessage)
    },
    parseTasks(tasksList) {
      this.tasks = tasksList
    },
    checkTask({ id, checked }) {
      this.tasksControllerInstance.editTask(id, { checked }, this.errorMessages.editTaskMessage)
    },
    openEditTask(submittedData) {
      const data = clone(submittedData)
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
  mounted() {
    this.getTasks()
  },
}
