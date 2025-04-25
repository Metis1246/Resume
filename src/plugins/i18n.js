import { ref, provide, inject } from "vue";
import { messages } from "../i18n";

const i18nSymbol = Symbol();

export function provideI18n() {
  const currentLanguage = ref("TH");

  const t = (key) => {
    const lang = currentLanguage.value === "TH" ? "th" : "en";
    return messages[lang][key] || key;
  };

  const changeLanguage = (lang) => {
    currentLanguage.value = lang;
  };

  provide(i18nSymbol, {
    currentLanguage,
    t,
    changeLanguage,
  });

  return { currentLanguage, t, changeLanguage };
}

export function useI18n() {
  const i18n = inject(i18nSymbol);
  if (!i18n) throw new Error("No i18n provided!!!");
  return i18n;
}
