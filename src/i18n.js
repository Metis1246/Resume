import { createI18n } from "vue-i18n";
import th from "./i18n/th";
import en from "./i18n/en";

// บันทึกการตั้งค่าภาษาในท้องถิ่น

const getSavedLocale = () => {
  // ตรวจสอบว่าอยู่ใน Browser ก่อนใช้ localStorage
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return localStorage.getItem("locale") || "TH";
  }
  return "TH"; // ค่าเริ่มต้นถ้าไม่มี localStorage
};

const i18n = createI18n({
  legacy: false,
  locale: getSavedLocale(),
  fallbackLocale: "TH", // ตั้งค่าภาษาสำรอง
  silentTranslationWarn: true, // ปิด warning
  messages: { TH: th, EN: en }
});

const { locale, availableLocales } = useI18n();
console.log("Current locale:", locale.value);
console.log("Available locales:", availableLocales);

export default i18n;
