import { useState } from "preact/hooks";
import { createContext } from "preact";

export const PostsTypeContext = createContext(null);

const PostsTypeContextProvider = ({ children }) => {
	const [activeTab, setActiveTab] = useState("forYou");

	return (
		<PostsTypeContext.Provider value={{ activeTab, setActiveTab }}>
			{children}
		</PostsTypeContext.Provider>
	);
};

export default PostsTypeContextProvider;
