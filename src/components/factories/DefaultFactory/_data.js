import rules from '@/helpers/validationRules'
import { currenciesToAutocomplete } from '@/helpers/_globalData'

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
    rules: [rules.required],
    type: 'autocomplete',
    items: currenciesToAutocomplete,
  },
  {
    label: 'Termin',
    name: 'deadline',
    rules: [rules.required],
    type: 'date',
    max: '2099-12-31',
  },
]
