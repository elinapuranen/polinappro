import i18n from 'i18next'
import { initReactI18next } from "react-i18next"
import translationEN from './eng.json'
import translationFI from './fi.json'

const resources = {
    en: {
      translation: translationEN
    },
    fi: {
      translation: translationFI
    }
  }

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "fi",
      keySeparator: false,
      interpolation: {
        escapeValue:false
      }
    })

export default i18n