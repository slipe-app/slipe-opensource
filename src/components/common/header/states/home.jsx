import { PagesContentTypeContext } from "../../contexts/pagesContentTypeContext";
import { useEffect, useContext } from "preact/hooks";
import { animate } from "motion";
import Svg from "../../ui/utils/svg";
import icons from "../../../../constants/icons";

import "./home.scss";

export default function StateHome({ url }) {
	const { activeContent, setActiveContent } = useContext(PagesContentTypeContext);

	const changeTab = (value) =>{
		const updatedTab = [...activeContent];
    	updatedTab[0] = value; 
		setActiveContent(updatedTab);
	}

	useEffect(() => {
		if (url == "/") {
			animate(".header_home_switcher__indicator", { transform: activeContent[0] === "forYou" ? "translateX(0)" : "translateX(100%)" }, { easing: "ease-out", duration: 0.15 });
		} else {
			changeTab('forYou')
		}
	}, [url, activeContent]);

	return (
		<>
			<a href='/notifs' className={url == "/notifs" ? "header_button_home--active" : "header_button_home--inactive"}>
				<Svg size={32} icon={icons['bell']} />
			</a>
			<div className='header_home_switcher'>
				<div className='header_home_switcher__indicator' />
				<button onClick={() => changeTab("forYou")} className={`header_home_switcher__tab--${activeContent[0] == "forYou" ? "active" : "inactive"}`}>
					Blogs
				</button>
				<button onClick={() => changeTab("follows")} className={`header_home_switcher__tab--${activeContent[0] == "follows" ? "active" : "inactive"}`}>
					Follows
				</button>
			</div>
			<a href='/search' className={url == "/search" ? "header_button_home--active" : "header_button_home--inactive"}>
				<Svg size={32} icon={icons['search']} />
			</a>
		</>
	);
}
