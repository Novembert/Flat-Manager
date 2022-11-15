export default {
  required: (val) =>
    (!!val && !Array.isArray(val)) ||
    (!!val && !!Array.isArray(val) && !!val.length) ||
    val === false ||
    val === 0 ||
    'This field is required',
  digits: (val) => !val || /^\d+$/.test(val) || 'This field can accept only digits',
  pickMonth: (val) => !val || val >= 1 || val <= 12 || 'This field can accept only values by range of 1 - 12',
  pickWeek: (val) => !val || val >= 1 || val <= 4 || 'This field can accept only values by range of 1 - 4',
  pickWeekDay: (val) => !val || val >= 1 || val <= 7 || 'This field can accept only values by range of 1 - 7',
  pickDay: (val) => !val || val >= 1 || val <= 30 || 'This field can accept only values by range of 1 - 30',
}
