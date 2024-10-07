import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import Blogs from "./pages/blogs.jsx";
import "./index.css";
import Profile from "./pages/profile.jsx";
import Search from "./pages/search.jsx";
import Header from "./components/common/header/header.jsx";
import PostsTypeContextProvider from "./components/common/contexts/postsTypeContext.jsx";
import TabBar from "./components/common/tabBar/tabBar.jsx";
import colors from "./constants/colors.js";
import Auth from "./pages/auth.jsx";
import LanguageContextProvider from "./components/common/contexts/languageContext.jsx";

export function App() {
	// 5.63 69 20
	return (
		<LanguageContextProvider>
			<PostsTypeContextProvider>
				<LocationProvider>
					<Header />
					<main style={{ background: colors.background }} className='w-screen fixed h-screen top-0'>
						<Router>
							<Route path='/' component={Blogs} />
							<Route path='/profile' component={Profile} />
							<Route path='/search' component={Search} />
							<Route path='/auth' component={Auth} />
						</Router>
					</main>
					<TabBar />
				</LocationProvider>
			</PostsTypeContextProvider>
		</LanguageContextProvider>
	);
}

render(<App />, document.getElementById("app"));
