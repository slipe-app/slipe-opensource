import LanguageContextProvider from "./languageContext";
import PostsTypeContextProvider from "./postsTypeContext";
import { ThemeProvider } from "./themeContext";
import { SessionContextProvider } from "./sessionContext";
import { LocationProvider } from "preact-iso";

export default function IndexContexts({ children }) {
	return (
		<LanguageContextProvider>
			<PostsTypeContextProvider>
				<ThemeProvider>
					<SessionContextProvider>
						<LocationProvider>{children}</LocationProvider>
					</SessionContextProvider>
				</ThemeProvider>
			</PostsTypeContextProvider>
		</LanguageContextProvider>
	);
}
