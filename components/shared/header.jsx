import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import StateHome from "./header/states/home";
import { animate } from "motion";

export default function Header() {
	const url = useLocation();

	const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		animate("#header-wrapper", { opacity: 0 }, { easing: "ease-out", duration: 0.1 }).then(() => {
			animate("#header-wrapper", { opacity: 1 }, { easing: "ease-out", duration: 0.1 });
			setCurrentPage(url.pathname);
		});
	}, [url]);

	return (
		<>
			{url !== "/auth" ? (
				<header
					id='header-wrapper'
					data-isbg={url == "/profile"}
					className='w-screen opacity-100 data-[isbg=false]:bg-background/90 data-[isbg=false]:backdrop-blur-2xl fixed z-50 p-4'
				>
					<div className='flex opacity-100 w-full gap-4'>
						{currentPage == "/" ? <StateHome url={url} /> : currentPage == "/profile" ? <StateProfile url={url} /> : null}
					</div>
				</header>
			) : null}
		</>
	);
}
