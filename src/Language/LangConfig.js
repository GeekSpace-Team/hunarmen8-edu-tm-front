import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      tm: {
        translation: {
          hakimlik: "hakimligin yeri",
        },
      },
      ru: {
        translation: {
          hakimlik: "dlya prowerka",
        },
      },
    },
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export { i18n };
