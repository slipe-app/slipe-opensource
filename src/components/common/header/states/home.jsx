import { PostsTypeContext } from "../../contexts/postsTypeContext";
import { useEffect, useContext } from "preact/hooks";
import { animate } from "motion";
import Svg from "../../ui/utils/svg";
import icons from "../../../../constants/icons";

import "./home.scss";

export default function StateHome({ url }) {
	const { activeTab, setActiveTab } = useContext(PostsTypeContext);

	useEffect(() => {
		if (url == "/") {
			animate(".switcher__indicator", { transform: activeTab === "forYou" ? "translateX(0)" : "translateX(100%)" }, { easing: "ease-out", duration: 0.15 });
		} else {
			setActiveTab("forYou");
		}
	}, [url, activeTab]);

	return (
		<>
			<a href='/notifs' className={url == "/notifs" ? "button--active" : "button--inactive"}>
				<Svg size={32} icon={icons["bell"]} />
			</a>
			<div className='switcher'>
				<div className='switcher__indicator' />
				<button onClick={() => setActiveTab("forYou")} className={activeTab == "forYou" ? "tab--active" : "tab--inactive"}>
					Blogs
				</button>
				<button onClick={() => setActiveTab("follows")} className={activeTab == "follows" ? "tab--active" : "tab--inactive"}>
					Follows
				</button>
			</div>
			<a href='/search' className={url == "/search" ? "button--active" : "button--inactive"}>
				<Svg size={32} icon={icons["search"]} />
			</a>
		</>
	);
}
