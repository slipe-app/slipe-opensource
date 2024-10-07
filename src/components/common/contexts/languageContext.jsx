import { useState } from "preact/hooks";
import { createContext } from "preact";

export const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");// 10.7A
	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
