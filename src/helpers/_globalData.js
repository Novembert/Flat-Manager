export const links = [
  {
    title: 'Start',
    icon: ['fas', 'home'],
    background: 'bg-grey',
    to: '/',
    welcome: true,
  },
  {
    title: 'Bills',
    icon: ['fas', 'hand-holding-dollar'],
    background: 'bg-blue-grey  bg-darken-1',
    to: 'bills',
  },
  // {
  //   title: 'Budżet',
  //   icon: 'dollar-sign',
  // },
  {
    title: 'Items availability',
    icon: 'box-open',
    background: 'bg-teal bg-darken-1',
  },
  {
    title: 'Shopping lists',
    background: 'bg-green bg-darken-1',
    icon: 'list-check',
  },
  {
    title: 'Cleaning',
    icon: 'broom',
    background: 'bg-light-green bg-darken-1',
    to: 'cleanings',
  },
  {
    title: 'Fixes',
    icon: 'hammer',
    background: 'bg-brown bg-darken-1',
    to: 'fixes',
  },
  {
    title: 'Visits',
    icon: 'people-group',
    background: 'bg-indigo bg-darken-1',
    to: 'visits',
  },
  {
    title: 'Reminders',
    icon: 'bell',
    background: 'bg-cyan bg-darken-1',
    to: 'alerts',
  },
]

export const currencies = ['DKK', 'EUR', 'PLN', 'USD']
export const currenciesToAutocomplete = currencies.map((curr) => ({ title: curr, value: curr }))
