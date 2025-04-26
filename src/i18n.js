import { createI18n } from "vue-i18n";
import th from "./i18n/th";
import en from "./i18n/en";

// บันทึกการตั้งค่าภาษาในท้องถิ่น
const savedLocale = localStorage.getItem("locale") || "TH";

const i18n = createI18n({
  legacy: false, // ใช้โหมด Composition API
  locale: savedLocale, // ตั้งค่าภาษาเริ่มต้น
  fallbackLocale: "TH", // ภาษาสำรองเมื่อไม่พบคำแปล
  messages: {
    TH: th,
    EN: en,
  },
});

export default i18n;
