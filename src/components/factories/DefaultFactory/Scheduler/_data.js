import rules from '@/helpers/validationRules'

const inputs = {
  scheduleType: {
    name: 'scheduleType',
    rules: [rules.required],
    items: [
      {
        label: 'Miesięcznie - konkretna data',
        value: 'monthly-date',
      },
      {
        label: 'Miesięcznie - dzień tygodnia w n-tym tygodniu',
        value: 'monthly-week',
      },
      {
        label: 'Tygodniowo',
        value: 'weekly',
      },
    ],
  },
  monthPicker: {
    name: 'nth-month',
    rules: [rules.required, rules.digits, rules.pickMonth],
    type: 'number',
    label: 'Ustawiaj zadanie co X miesiąc/miesiące',
  },
  weekPicker: {
    name: 'nth-week',
    rules: [rules.required, rules.digits, rules.pickWeek],
    type: 'number',
    label: 'Ustawiaj zadanie co X tydzień/tygodnie',
  },
  weekDayPicker: {
    name: 'nth-weekday',
    rules: [rules.required, rules.digits, rules.pickWeekDay],
    type: 'number',
    label: 'Ustawiaj zadanie w X dniu tygodnia',
  },
  dayPicker: {
    name: 'nth-day',
    rules: [rules.required, rules.digits, rules.pickDay],
    type: 'number',
    label: 'Ustawiaj zadanie X dnia miesiąca',
  },
}

const inputsMapping = {
  'monthly-date': [inputs.monthPicker, inputs.dayPicker],
  'monthly-week': [
    inputs.monthPicker,
    { ...inputs.weekPicker, label: 'Ustawiaj zadanie w X tygodniu miesiąca' },
    inputs.weekDayPicker,
  ],
  weekly: [inputs.weekPicker, inputs.weekDayPicker],
}

export { inputs, inputsMapping }
