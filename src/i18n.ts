import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { zh } from './locales/zh'
import { en } from './locales/en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh,
      en
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false // React 已经自带防 XSS
    }
  })

export default i18n