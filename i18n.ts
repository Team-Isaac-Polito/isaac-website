import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    supportedLngs: ["it", "en"],
    interpolation: {
      escapeValue: false,
      formatSeparator: ".",
    },
    lng: localStorage.getItem("i18nextLng") || "it",
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
  })

export default i18n
