import { useContext, useState } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate, spring } from "motion";
import { PostsTypeContext } from "../contexts/postsTypeContext";

export default function StatesRender(url) {
	const [activeTab, setActiveTab] = useState("forYou");

	const handleTabChange = tab => {
			setActiveTab(tab);
			animate(".active-bg", { left: tab === "forYou" ? "0%" : "50%" }, { easing: spring() });
	};
	switch (url) {
		case "/":
			return (
				<div className='relative flex w-64 h-12 bg-gray-800 rounded-full'>
					{/* Анимируем движущийся фон для активной кнопки */}
					<div className='absolute w-1/2 h-full bg-white rounded-full active-bg'></div>
					{/* Кнопки */}
					<button onClick={() => handleTabChange("forYou")} className={`flex-1 z-10 text-center font-semibold text-sm transition-colors duration-300 ${activeTab === "forYou" ? "text-black" : "text-white"}`}>
						For you
					</button>
					<button onClick={() => handleTabChange("follows")} className={`flex-1 z-10 text-center font-semibold text-sm transition-colors duration-300 ${activeTab === "follows" ? "text-black" : "text-white"}`}>
						Follows
					</button>
				</div>
			);
		case "/search":
			return <>2</>;
		case "/profile":
			return <>3</>;
	}
}
