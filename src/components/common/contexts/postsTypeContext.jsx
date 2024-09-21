import { useState } from "preact/hooks";
import { createContext } from "preact";

export const PostsTypeContext = createContext(null);

const PostsTypeContextProvider = ({ children }) => {
	const [type, setType] = useState("foryou");

	return (
		<PostsTypeContext.Provider value={{ type, setType }}>
			{children}
		</PostsTypeContext.Provider>
	);
};

export default PostsTypeContextProvider;
