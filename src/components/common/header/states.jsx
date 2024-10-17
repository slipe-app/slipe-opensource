import { useContext, useEffect, useState } from "preact/hooks";
import { useTheme } from "../contexts/themeContext";
import { animate } from "motion";
import { PostsTypeContext } from "../contexts/postsTypeContext";
import readLocaleFile from "../../../utils/locales/read";
import { LanguageContext } from "../contexts/languageContext";

export default function StatesRender(url) {
	const { language, setLanguage } = useContext(LanguageContext);
	const { activeTab, setActiveTab } = useContext(PostsTypeContext);
	const { theme } = useTheme();

	const locales = readLocaleFile(language);

	useEffect(() => {
		if (url == "/") {
			animate(".active-bg", { left: activeTab === "forYou" ? "0.25rem" : "50%" }, { easing: "ease", duration: 0.15 });
		} else {
			setActiveTab("forYou");
		}
	});
	switch (url) {
		case "/":
			return (
				<div style={{ background: theme.buttonInactiveBg }} className='relative p-1 flex w-full h-[3.5rem] rounded-full'>
					<div style={{ background: theme.buttonInactiveBg, left: "0.25rem" }} className='absolute w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] rounded-full active-bg'></div>
					<button style={{ color: activeTab === "forYou" ? theme.text : theme.textPrimaryTransparent }} onClick={() => setActiveTab("forYou")} className='flex-1 z-10 font-medium text-center transition-theme duration-200'>
						{locales.header.switcher.for_you}
					</button>
					<button style={{ color: activeTab === "follows" ? theme.text : theme.textPrimaryTransparent }} onClick={() => setActiveTab("follows")} className='flex-1 z-10 font-medium text-center transition-theme duration-200'>
						{locales.header.switcher.follows}
					</button>
				</div>
			);
		case "/search":
			return <>2</>;
		case "/profile":
			return <>3</>;
	}
}
