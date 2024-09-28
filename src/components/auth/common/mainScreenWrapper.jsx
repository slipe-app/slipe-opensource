import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import { animate } from "motion";
import readLocaleFile from "../../../utils/locales/read";
import AuthStageProgress from "../stages/stageProgress";
import AuthStageTemplate from "../stages/stageBlogSystem";
import icons from "../../../constants/icons";

export default function AuthMainScreenWrapper({ currentStage }) {
	const [timedCurrentStage, setTimedCurrentStage] = useState(0);
	const [screenType, setScreenType] = useState("main");
	const locales = readLocaleFile("en");

	const stagesTexts = {
		0: {
			icon: icons["slipe"],
			main: "Slipe blogging app",
			primary: "Start blogging, or follow other people's blogs, because it can be done here",
		},
		1: {
			icon: icons["blogs"],
			main: "Handy post swiping",
			primary: "Enjoy browsing through the posts thanks to our post review system",
		},
		2: {
			icon: icons["smile"],
			main: "Reactions, not likes",
			primary: "Now instead of likes, you can better express your feelings about the blog",
		},
		3: {
			icon: icons["paint"],
			main: "The Dream Editor",
			primary: "Create truly breathtaking posts with our intuitively simple editor",
		},
		4: {
			icon: icons["terminal"],
			main: "Code transparency",
			primary: "All the client code is on an open and you can create your own client!",
		},
	};

	const buttonTransition = screenType => {
		setScreenType(screenType);
		animate("#authSignUpButton", { marginBottom: "0.5rem" }, { easing: "ease-out", duration: 0.15 });
		animate("#authLogInButton", { marginBottom: "-5rem", opacity: 0 }, { easing: "ease-out", duration: 0.15 });
	};

	useEffect(() => {
		animate("#stages", { opacity: 0 }, { duration: 0.15, easing: "ease-out" });

		setTimeout(() => {
			setTimedCurrentStage(currentStage);
			animate("#stages", { opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}, 200);
	}, [currentStage]);
	return (
		<section className='w-screen animate-[fadeIn_0.2s_ease] absolute none top-0 h-screen flex flex-col gap-5 py-5 px-4'>
			<AuthStageProgress stages={[1, 2, 3, 4, 5]} currentStage={timedCurrentStage} />
			<div id='stages' className='h-full flex flex-col items-center justify-center'>
				<AuthStageTemplate text={stagesTexts[`${timedCurrentStage}`].main} primaryText={stagesTexts[`${timedCurrentStage}`].primary} icon={stagesTexts[`${timedCurrentStage}`].icon} />
			</div>
			<div className='w-full flex flex-col gap-3'>
				<AuthButton callBack={() => (screenType === "main" ? buttonTransition("signUp") : null)} id='authSignUpButton' text={screenType === "main" ? locales.auth.main_screen.sign_up : screenType == "logIn" ? locales.auth.main_screen.log_in : locales.auth.sign_up.next_action_password} />
				<AuthButton callBack={() => (screenType === "main" ? buttonTransition("logIn") : null)} id='authLogInButton' type='secondary' text={locales.auth.main_screen.log_in} />
			</div>
		</section>
	);
}
