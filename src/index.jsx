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

export function App() {
	return (
		<PostsTypeContextProvider>
			<LocationProvider>
				<Header />
				<main style={{ background: colors.background}} className='w-screen h-screen absolute top-0'>
					<Router>
						<Route path='/' component={Blogs} />
						<Route path='/profile' component={Profile} />
						<Route path='/search' component={Search} />
					</Router>
				</main>
				<TabBar />
			</LocationProvider>
		</PostsTypeContextProvider>
	);
}

render(<App />, document.getElementById("app"));
