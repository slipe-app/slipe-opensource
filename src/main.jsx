import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/page";
import Profile from "./pages/profile/page";
import "./index.css";
import Auth from "./pages/auth/page";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<main className='w-screen h-screen'>
			<BrowserRouter>
				<Routes>
					<Route path='/auth' element={<Auth />} />
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</main>
	</StrictMode>
);
