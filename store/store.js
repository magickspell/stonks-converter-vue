export const state = () => ({
  lang: 'eng', // setup by default because we cant access like this - window.localStorage.getItem('lang')
  currency: 'USD', // this params throwing from components from their MOUNTED lifecycle
  theme: 'dark'
})

export const getters = {
  lang: state => state.lang,
  currency: state => state.currency,
  theme: state => state.theme,
}

export const mutations = {
  setLang(state, lang) {
    localStorage.setItem('lang', lang)
    state.lang = lang
  },
  setCurrency(state, currency) {
    localStorage.setItem('currency', currency)
    state.currency = currency
  },
  setTheme(state, theme) {
    localStorage.setItem('theme', theme)
    state.theme = theme
  }
}

export const actions = {
  getLang({state}) {
    const lang = localStorage.getItem('lang')
    state.lang = lang
  },
  getCurrency({state}) {
    const currency = localStorage.getItem('currency')
    state.currency = currency
  },
  getTheme({state}) {
    const theme = localStorage.getItem('theme')
    state.theme = theme
  },
}

