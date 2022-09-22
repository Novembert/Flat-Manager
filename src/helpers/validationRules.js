export default {
  required: (val) =>
    (!!val && !Array.isArray(val)) ||
    (!!val && !!Array.isArray(val) && !!val.length) ||
    val === false ||
    val === 0 ||
    'Pole wymagane',
  digits: (val) => !val || /^\d+$/.test(val) || 'Pole akceptuje tylko cyfry',
  pickMonth: (val) => !val || val >= 1 || val <= 12 || 'Podaj wartości z przedziału 1 - 12',
  pickWeek: (val) => !val || val >= 1 || val <= 4 || 'Podaj wartości z przedziału 1 - 4',
  pickWeekDay: (val) => !val || val >= 1 || val <= 7 || 'Podaj wartości z przedziału ',
  pickDay: (val) => !val || val >= 1 || val <= 30 || 'Podaj wartości z przedziału 1 - 30',
}
