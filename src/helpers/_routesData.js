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
  visits: {
    collection: 'visits',
    label: 'Visit',
    errorMessages: {
      editTaskMessage: 'Wystąpił niespodziewany błąd podczas edytowania wizyty',
      addTaskMessage: 'Wystąpił niespodziewany błąd podczas dodawania wizyty',
      getTasksMessage: 'Wystąpił niespodziewany błąd podczas pobierania listy wizyt',
      deleteTaskMessage: 'Wystąpił niespodziewany błąd podczas usuwania wizyty',
    },
    factoryConfig: {
      editTask: 'Edytuj wizytę',
      addTask: 'Dodaj wizytę',
      hide: ['value', 'currency'],
    },
    checkColor: 'indigo darken-1',
  },
  fixes: {
    collection: 'fixes',
    label: 'Fix',
    errorMessages: {
      editTaskMessage: 'Wystąpił niespodziewany błąd podczas edytowania zlecenia naprawy',
      addTaskMessage: 'Wystąpił niespodziewany błąd podczas dodawania zlecenia naprawy',
      getTasksMessage: 'Wystąpił niespodziewany błąd podczas pobierania listy zleceń naprawy',
      deleteTaskMessage: 'Wystąpił niespodziewany błąd podczas usuwania zlecenia naprawy',
    },
    factoryConfig: {
      editTask: 'Edytuj zlecenie naprawy',
      addTask: 'Dodaj zlecenie naprawy',
      hide: ['value', 'currency', 'deadline'],
    },
    checkColor: 'brown darken-1',
  },
  alerts: {
    collection: 'alerts',
    label: 'Alert',
    errorMessages: {
      editTaskMessage: 'Wystąpił niespodziewany błąd podczas edytowania przypomnienia',
      addTaskMessage: 'Wystąpił niespodziewany błąd podczas dodawania przypomnienia',
      getTasksMessage: 'Wystąpił niespodziewany błąd podczas pobierania listy przypomnień',
      deleteTaskMessage: 'Wystąpił niespodziewany błąd podczas usuwania przypomnienia',
    },
    factoryConfig: {
      editTask: 'Edytuj przypomnienie',
      addTask: 'Dodaj przypomnienie',
      hide: ['value', 'currency'],
    },
    checkColor: 'cyan darken-1',
  },
}

export default routesData
