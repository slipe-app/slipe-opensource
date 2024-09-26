import { useState } from "preact/hooks";
import AuthButton from "./button";
import { animate } from "motion";

export default function AuthMainScreenWrapper({ currentStage }) {
	const [screenType, setScreenType] = useState("main");
	const buttonTransition = (screenType) => {
		setScreenType(screenType);
		animate("#authSignUpButton", { marginBottom: "0.5rem" }, { easing: "ease", duration: 0.2 });
		animate("#authLogInButton", { marginBottom: "-5rem", opacity: 0 }, { easing: "ease", duration: 0.2 });
	};
	return (
		<section className='w-screen animate-[fadeIn_0.2s_ease] absolute none top-0 h-screen flex flex-col gap-5 py-5 px-4'>
			<div className='h-full'></div>
			<div className='w-full flex flex-col gap-3'>
				<AuthButton callBack={() => screenType === "main" ? buttonTransition("signUp") : null} id='authSignUpButton' text={screenType === "main" ? "Sign up for free" : screenType == "logIn" ? "Log in to account" : "Next > Create password"} />
				<AuthButton callBack={() => screenType === "main" ? buttonTransition("logIn") : null} id='authLogInButton' type='secondary' text='Log in' />
			</div>
		</section>
	);
}
