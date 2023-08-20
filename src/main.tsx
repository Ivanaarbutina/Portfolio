import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import enTranslation from "./i18n/en/translation.json";
import hrTranslation from "./i18n/hr/translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    hr: {
      translation: hrTranslation,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
