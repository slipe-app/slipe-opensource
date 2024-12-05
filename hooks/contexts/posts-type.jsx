import { useState, createContext } from "react";

export const PagesContentTypeContext = createContext(null);

const PagesContentTypeContextProvider = ({ children }) => {
	const [activeContent, setActiveContent] = useState(["forYou", "profile"]);

	return (
		<PagesContentTypeContext.Provider value={{ activeContent, setActiveContent }}>
			{children}
		</PagesContentTypeContext.Provider>
	);
};

export default PagesContentTypeContextProvider;
