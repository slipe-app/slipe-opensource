import LanguageContextProvider from "./languageContext";
import PagesContentTypeContextProvider from "./pagesContentTypeContext";
import { ThemeProvider } from "./themeContext";
import { SessionContextProvider } from "./sessionContext";
import { LocationProvider } from "preact-iso";

export default function IndexContexts({ children }) {
	return (
		<LanguageContextProvider>
			<PagesContentTypeContextProvider>
				<ThemeProvider>
					<SessionContextProvider>
						<LocationProvider>{children}</LocationProvider>
					</SessionContextProvider>
				</ThemeProvider>
			</PagesContentTypeContextProvider>
		</LanguageContextProvider>
	);
}
