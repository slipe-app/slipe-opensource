import { useLocation } from "preact-iso";
import { useEffect } from "preact/hooks";
import StateHome from "./states/home";

import "./header.scss"

export default function Header() {
	const { url } = useLocation();

	useEffect(() => {
		console.log((e) => e)
	}, [url])
	
	return (
		<>
			{url !== "/auth" ? (
				<header className={`header${url == "/profile" ? "" : "--with_bg"}`}>
					<StateHome url={url}/>
				</header>
			) : null}
		</>
	);
}
