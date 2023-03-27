import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common from '../locales/en/common.json'
import home from '../locales/en/home.json'
import dashboard from '../locales/en/dashboard.json'

export function initI18n() {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        common,
        home,
        dashboard,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
}
