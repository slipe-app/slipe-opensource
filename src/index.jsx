import { render } from "preact";
import { Router, Route } from "preact-iso";

import Blogs from "./pages/blogs.jsx";
import "./index.css";
import Profile from "./pages/profile.jsx";
import Search from "./pages/search.jsx";
import Header from "./components/common/header/header.jsx";
import TabBar from "./components/common/tabBar.jsx";
import Auth from "./pages/auth.jsx";
import IndexContexts from "./components/common/contexts/contexts.jsx";

export function App() {
	// 5.63 69 20
	return (
		<IndexContexts>
			<Header />
				<Router>
					<Route path='/' component={Blogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/search' component={Search} />
					<Route path='/auth' component={Auth} />
				</Router>
			<TabBar />
		</IndexContexts>
	);
}

render(<App />, document.getElementById("app"));
