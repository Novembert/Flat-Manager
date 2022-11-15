const routesData = {
  bills: {
    collection: 'bills',
    label: 'Bill',
    errorMessages: {
      editTaskMessage: 'An error occured while editting the bill',
      addTaskMessage: 'An error occured while adding the bill',
      getTasksMessage: 'An error occured while downloading the bills list',
      deleteTaskMessage: 'An error occured while deleting the bill',
    },
    factoryConfig: {
      editTask: 'Edit bill',
      addTask: 'Add bill',
    },
    checkColor: 'blue-grey darken-1',
  },
  cleanings: {
    collection: 'cleanings',
    label: 'Cleaning',
    factoryConfig: {
      editTask: 'Edit task',
      addTask: 'Add task',
      hide: ['value', 'currency'],
    },
    checkColor: 'light-green darken-1',
  },
  visits: {
    collection: 'visits',
    label: 'Visit',
    errorMessages: {
      editTaskMessage: 'An error occured while edytowania wizyty',
      addTaskMessage: 'An error occured while dodawania wizyty',
      getTasksMessage: 'An error occured while pobierania listy wizyt',
      deleteTaskMessage: 'An error occured while usuwania wizyty',
    },
    factoryConfig: {
      editTask: 'Edit visit',
      addTask: 'Add visit',
      hide: ['value', 'currency'],
    },
    checkColor: 'indigo darken-1',
  },
  fixes: {
    collection: 'fixes',
    label: 'Fix',
    errorMessages: {
      editTaskMessage: 'An error occured while editting the task',
      addTaskMessage: 'An error occured while adding the task',
      getTasksMessage: 'An error occured while downloading the tasks list',
      deleteTaskMessage: 'An error occured while deleting the task',
    },
    factoryConfig: {
      editTask: 'Edytuj task',
      addTask: 'Add task',
      hide: ['value', 'currency', 'deadline'],
    },
    checkColor: 'brown darken-1',
  },
  alerts: {
    collection: 'alerts',
    label: 'Alert',
    errorMessages: {
      editTaskMessage: 'An error occured while editting the reminder',
      addTaskMessage: 'An error occured while adding the reminder',
      getTasksMessage: 'An error occured while downloading the reminders list',
      deleteTaskMessage: 'An error occured while deleting the reminder',
    },
    factoryConfig: {
      editTask: 'Edit reminder',
      addTask: 'Add reminder',
      hide: ['value', 'currency'],
    },
    checkColor: 'cyan darken-1',
  },
}

export default routesData
