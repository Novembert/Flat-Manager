import rules from '@/helpers/validationRules'
import { currenciesToAutocomplete } from '@/helpers/_globalData'

export const defaultInputs = [
  {
    label: 'Name',
    name: 'name',
    rules: [rules.required],
    type: 'text',
  },
  {
    label: 'Price',
    name: 'value',
    rules: [rules.required, rules.digits],
    type: 'number',
  },
  {
    label: 'Currency',
    name: 'currency',
    rules: [rules.required],
    type: 'autocomplete',
    items: currenciesToAutocomplete,
  },
  {
    label: 'Deadline',
    name: 'deadline',
    rules: [rules.required],
    type: 'date',
    max: '2099-12-31',
  },
  {
    name: 'schedule',
    type: 'scheduler',
  },
]
