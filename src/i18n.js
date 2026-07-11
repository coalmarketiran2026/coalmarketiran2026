import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import fa from "./locales/fa/translation.json";
import en from "./locales/en/translation.json";

i18n
.use(LanguageDetector)
.use(initReactI18next)

.init({

resources:{

fa:{
translation:fa
},

en:{
translation:en
}

},

fallbackLng:"fa",

interpolation:{
escapeValue:false
}

});

export default i18n;