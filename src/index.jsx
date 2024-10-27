import { render } from "preact";
import { Router, Route } from "preact-iso";
import Blogs from "./pages/blogs.jsx";
import Profile from "./pages/profile.jsx";
import Search from "./pages/search.jsx";
import Header from "./components/common/header/header.jsx";
import TabBar from "./components/common/tabBar/tabBar.jsx";
import Auth from "./pages/auth.jsx";
import IndexContexts from "./components/common/contexts/contexts.jsx";

import "./index.scss";

export function App() {
	// 5.63 69 20
	return (
		<IndexContexts>
			<Header />
			<main>
				<Router>
					<Route path='/' component={Blogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/search' component={Search} />
					<Route path='/auth' component={Auth} />
				</Router>
			</main>
			<TabBar />
		</IndexContexts>
	);
}

render(<App />, document.getElementById("app"));
