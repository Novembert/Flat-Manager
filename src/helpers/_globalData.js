export const links = [
  {
    title: 'Start',
    icon: ['fas', 'home'],
    background: 'bg-grey',
    to: '/',
    welcome: true,
  },
  {
    title: 'Rachunki',
    icon: ['fas', 'hand-holding-dollar'],
    background: 'bg-blue-grey  bg-darken-1',
    to: 'bills',
  },
  // {
  //   title: 'Budżet',
  //   icon: 'dollar-sign',
  // },
  {
    title: 'Stan',
    icon: 'box-open',
    background: 'bg-teal bg-darken-1',
  },
  {
    title: 'Listy zakupów',
    background: 'bg-green bg-darken-1',
    icon: 'list-check',
  },
  {
    title: 'Sprzątanie',
    icon: 'broom',
    background: 'bg-light-green bg-darken-1',
    to: 'cleanings',
  },
  {
    title: 'Naprawy',
    icon: 'hammer',
    background: 'bg-brown bg-darken-1',
  },
  {
    title: 'Wizyty',
    icon: 'people-group',
    background: 'bg-indigo bg-darken-1',
  },
  {
    title: 'Przypomnienia',
    icon: 'bell',
    background: 'bg-cyan bg-darken-1',
  },
]

export const currencies = ['DKK', 'EUR', 'PLN', 'USD']
export const currenciesToAutocomplete = currencies.map((curr) => ({ title: curr, value: curr }))
