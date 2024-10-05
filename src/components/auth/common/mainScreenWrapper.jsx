import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import { animate } from "motion";
import readLocaleFile from "../../../utils/locales/read";
import AuthStageProgress from "../stages/stagesProgress";
import AuthStageTemplate from "../stages/stagesTemplate";
import stagesTexts from "./stagesTexts";
import AuthSignUpWrapper from "../signUp/signUpWrapper";

export default function AuthMainScreenWrapper({ currentStage = 0, setScreenType, screenType = "main", setCurrentStage }) {
	const [timedCurrentStage, setTimedCurrentStage] = useState(0);
	const locales = readLocaleFile("en");

	const buttonTexts = {
		0: locales.auth.sign_up.next_action_password,
		1: locales.auth.sign_up.next_action_username,
		2: locales.auth.sign_up.next_action_confirm,
		3: locales.auth.sign_up.next_action_avatar,
		4: locales.auth.sign_up.next_action_categories,
		5: locales.auth.sign_up.next_action_blogging,
	};
	
	const signUpStages = {
		0: "email",
		1: "password",
		2: "username",
		3: "confirm",
		4: "avatar",
		5: "categories"
	}

	const buttonTransition = screenType => {
		animate("#stages", { opacity: 0 }, { duration: 0.15, easing: "ease-out" });
		animate("#stagesProgress", { opacity: 0, display: "none" }, { duration: 0.15, easing: "ease-out" });
		setTimeout(() => {
			setScreenType(screenType);
			animate("#stages", { opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}, 200);
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
		<section className='w-screen animate-[fadeIn_0.15s_ease] absolute none top-0 h-screen flex flex-col gap-5 py-5 px-4'>
			<AuthStageProgress stages={[1, 2, 3, 4, 5]} currentStage={timedCurrentStage} />
			<div id='stages' className='h-full flex flex-col items-center justify-center'>
				{screenType === "main" ? (
					<AuthStageTemplate text={stagesTexts[`${timedCurrentStage}`].main} primaryText={stagesTexts[`${timedCurrentStage}`].primary} icon={stagesTexts[`${timedCurrentStage}`].icon} />
				) : (
					<AuthSignUpWrapper setScreenType={setScreenType} currentSignUpStage={signUpStages[currentStage]} />
				)}
			</div>
			<div className='w-full flex flex-col gap-3'>
				<AuthButton
					callBack={() => (screenType === "main" ? buttonTransition("signUp") : setCurrentStage(stage => stage + 1))}
					id='authSignUpButton'
					text={screenType === "main" ? locales.auth.main_screen.sign_up : screenType == "logIn" ? locales.auth.main_screen.log_in : buttonTexts[currentStage]}
				/>
				<AuthButton callBack={() => (screenType === "main" ? buttonTransition("logIn") : null)} id='authLogInButton' type='secondary' text={locales.auth.main_screen.log_in} />
			</div>
		</section>
	);
}
