const routesData = {
  bills: {
    collection: 'bills',
    label: 'Bill',
    errorMessages: {
      editTaskMessage: 'Wystąpił niespodziewany błąd podczas edytowania rachunku',
      addTaskMessage: 'Wystąpił niespodziewany błąd podczas dodawania rachunku',
      getTasksMessage: 'Wystąpił niespodziewany błąd podczas pobierania listy rachunków',
      deleteTaskMessage: 'Wystąpił niespodziewany błąd podczas usuwania rachunku',
    },
    factoryConfig: {
      editTask: 'Edytuj rachunek',
      addTask: 'Dodaj rachunek',
    },
    checkColor: 'blue-grey darken-1',
  },
  cleanings: {
    collection: 'cleanings',
    label: 'Cleaning',
    factoryConfig: {
      editTask: 'Edytuj zadanie',
      addTask: 'Dodaj zadanie',
      hide: ['value', 'currency'],
    },
    checkColor: 'light-green darken-1',
  },
}

export default routesData
