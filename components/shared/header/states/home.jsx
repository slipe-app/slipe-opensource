import { PagesContentTypeContext } from "@/hooks/contexts/posts-type";
import { useEffect, useContext } from "react";
import { animate } from "motion";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import { Button } from "@/components/ui/button";

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
