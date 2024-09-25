import { useContext, useEffect, useState } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate, spring } from "motion";
import { PostsTypeContext } from "../contexts/postsTypeContext";

export default function StatesRender(url) {
	const { activeTab, setActiveTab } = useContext(PostsTypeContext);

	useEffect(() => {
		animate(".active-bg", { left: activeTab === "forYou" ? ".25rem" : "50%" }, { easing: "ease", duration: 0.2 });
	}, [activeTab]);
	switch (url) {
		case "/":
			return (
				<div style={{ background: colors.buttonInactiveBackground }} className='relative p-1 flex w-64 h-[3.25rem] rounded-full'>
					{/* Анимируем движущийся фон для активной кнопки */}
					<div style={{ background: colors.buttonInactiveBackground }} className='absolute w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] rounded-full active-bg'></div>
					{/* Кнопки */}
					<button style={{ color: activeTab === "forYou" ? colors.text : colors.textPrimaryTransparent }} onClick={() => setActiveTab("forYou")} className='flex-1 z-10 font-medium text-center transition-colors duration-300'>
						For you
					</button>
					<button style={{ color: activeTab === "follows" ? colors.text : colors.textPrimaryTransparent }} onClick={() => setActiveTab("follows")} className='flex-1 z-10 font-medium text-center transition-colors duration-300'>
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
