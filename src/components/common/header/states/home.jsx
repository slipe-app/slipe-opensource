import { PostsTypeContext } from "../../contexts/postsTypeContext";
import { useEffect, useContext } from "preact/hooks";
import { animate } from "motion";
import Svg from "../../ui/utils/svg";
import icons from "../../../../constants/icons";

import "./states.scss";
import { useTheme } from "../../contexts/themeContext";

export default function StateHome({ url }) {
	const { activeTab, setActiveTab } = useContext(PostsTypeContext);
    const { theme } = useTheme();

	useEffect(() => {
		if (url == "/") {
			animate(".active-bg", { left: activeTab === "forYou" ? "0.25rem" : "50%" }, { easing: "ease", duration: 0.15 });
		} else {
			setActiveTab("forYou");
		}
	}, [url, activeTab]);

	return (
		<>
			<a href='/notifs' className='rounded-full duration-200 ease-out p-[0.6875rem]'>
				<Svg size={34} style={{ color: url == "/search" ? theme.background : theme.text }} icon={icons["bell"]} />
			</a>
			<div style={{ background: theme.buttonInactiveBg }} className='relative p-1 flex w-full h-[3.5rem] rounded-full'>
				<div style={{ background: theme.buttonInactiveBg, left: "0.25rem" }} className='absolute w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] rounded-full active-bg'></div>
				<button
					style={{ color: activeTab === "forYou" ? theme.text : theme.textPrimaryTransparent }}
					onClick={() => setActiveTab("forYou")}
					className='flex-1 z-10 font-medium text-center transition-theme duration-200'
				>
					Blogs
				</button>
				<button
					style={{ color: activeTab === "follows" ? theme.text : theme.textPrimaryTransparent }}
					onClick={() => setActiveTab("follows")}
					className='flex-1 z-10 font-medium text-center transition-theme duration-200'
				>
					Follows
				</button>
			</div>
			<a href='/search' style={{ backgroundColor: url == "/notifs" ? theme.text : theme.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.75rem]'>
				<Svg size={32} style={{ color: url == "/search" ? theme.background : theme.text }} icon={icons["search"]} />
			</a>
		</>
	);
}
