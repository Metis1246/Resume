import { createI18n } from "vue-i18n";
import th from "./i18n/th";
import en from "./i18n/en";

// ใช้ lowercase สำหรับ locale
const savedLocale = localStorage.getItem("locale") || "th";

const i18n = createI18n({
  legacy: false, // ใช้โหมด Composition API
  locale: savedLocale, // ภาษาเริ่มต้น
  fallbackLocale: "th", // ภาษา fallback
  messages: {
    th, // ใช้ lowercase
    en,
  },
});

export default i18n;
