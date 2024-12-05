import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/page";
import Profile from "./pages/profile/page";
import { Toaster } from "sonner";
import Auth from "./pages/auth/page";
import Header from "@/components/shared/header";
import PagesContentTypeContextProvider from "@/hooks/contexts/posts-type";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<PagesContentTypeContextProvider>
			<BrowserRouter>
				<Header />
				<main className='w-screen h-screen'>
					<Routes>
						<Route path='/auth' element={<Auth />} />
						<Route path='/' element={<Home />} />
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</main>
			</BrowserRouter>
			<Toaster
				gap={12}
				toastOptions={{
					className: "rounded-xl text-sm",
				}}
				position='top-center'
			/>
		</PagesContentTypeContextProvider>
	</StrictMode>
);
