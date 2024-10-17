import LanguageContextProvider from "./languageContext";
import PostsTypeContextProvider from "./postsTypeContext";
import { ThemeProvider } from "./themeContext";
import { LocationProvider } from "preact-iso";

export default function IndexContexts({ children }) {
	return (
		<LanguageContextProvider>
			<PostsTypeContextProvider>
				<ThemeProvider>
					<LocationProvider>{children}</LocationProvider>
				</ThemeProvider>
			</PostsTypeContextProvider>
		</LanguageContextProvider>
	);
}
