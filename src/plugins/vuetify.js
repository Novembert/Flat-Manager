// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#424242',
    'primary-darken-1': '#212121',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify(
  { components, 
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    },
    defaults: {
      VTextField: {
        variant: 'outlined',
        placeholder: 'Wpisz'
      },
      VAutocomplete: {
        variant: 'outlined',
        placeholder: 'Wybierz',
        dense: true
      }
    } 
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
