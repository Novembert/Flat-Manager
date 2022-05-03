import rules from '@/helpers/validationRules'
import { currencies } from '@/helpers/_globalData'

export const defaultInputs = [
  {
    label: 'Nazwa',
    name: 'name',
    rules: [rules.required],
    type: 'text',
  },
  {
    label: 'Cena',
    name: 'value',
    rules: [rules.required, rules.digits],
    type: 'number',
  },
  {
    label: 'Waluta',
    name: 'currency',
    // rules: [rules.required],
    type: 'autocomplete',
    items: currencies,
  },
  {
    label: 'Deadline',
    name: 'deadline',
    rules: [rules.required],
    type: 'date',
  }
]