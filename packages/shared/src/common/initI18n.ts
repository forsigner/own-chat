import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common from '../locales/en/common.json'
import home from '../locales/en/home.json'
import cn_common from '../locales/zh-CN/common.json'
import cn_home from '../locales/zh-CN/home.json'

export function initI18n() {
  const lng = 'en'
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        common,
        home,
      },
      'zh-CN': {
        common: cn_common,
        home: cn_home,
      },
    },
    // lng: 'zh-CN',
    // lng,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
}
