import ru from "../../locales/ru.json";
import en from "../../locales/en.json";

const languages = {
    ru: ru,
    en: en
};

export default function readLocaleFile (language) {
    return languages[language];
}