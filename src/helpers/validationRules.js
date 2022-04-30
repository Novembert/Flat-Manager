export default {
  required: val => ((!!val && !Array.isArray(val)) || (!!val && !!Array.isArray(val) && !!val.length) || val === false || val === 0) || 'Pole wymagane',
  digits: val => (!val || /^\d+$/.test(val)) || 'Pole akceptuje tylko cyfry',
}