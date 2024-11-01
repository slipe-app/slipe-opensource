import { useLocation } from "preact-iso";
import { useEffect, useState, useMemo } from "preact/hooks";
import StateHome from "./states/home";
import StateProfile from "./states/profile";
import { animate } from "motion";

import "./header.scss";

export default function Header() {
	const { url } = useLocation();

	const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		animate(".header-wrapper", { opacity: 0 }, { easing: "ease-out", duration: 0.1 }).finished.then(() => {
			animate(".header-wrapper", { opacity: 1 }, { easing: "ease-out", duration: 0.1 });
			setCurrentPage(url);
		});
	}, [url]);

	return (
		<>
			{url !== "/auth" ? (
				<header className={`header${url == "/profile" ? "" : "--with_bg"}`}>
					<div className='header-wrapper'>
						{currentPage == "/" ? <StateHome url={url} /> : currentPage == "/profile" ? <StateProfile url={url} /> : null}
					</div>
				</header>
			) : null}
		</>
	);
}
