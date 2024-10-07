import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import AuthStagesSlider from "../stages/stagesSlider"; 
import fetcher from "../../../utils/fetcher";
import hasStringByPass from "../../../utils/auth/passwordChecks";

const signUpTexts = ["Next > Password", "Next > Profile", "Dive into blogging"];

const updateSlide = (currentSlide, direction) => {
	if (direction === "next") return Math.min(currentSlide + 1, 2);
	if (direction === "prev") return Math.max(currentSlide - 1, 0);
	return currentSlide;
};

export default function AuthMainScreenWrapper() {
	const [stagesType, setStagesType] = useState("main");
	const [currentSlide, setCurrentSlide] = useState(0);
	const [userData, setUserData] = useState({ username: "", avatar: "", displayname: "", password: "" });
	const [isContinue, setIsContinue] = useState(false);

	const updateUserData = key => value => setUserData(prevData => ({ ...prevData, [key]: value }));

	const accountChecking = async () => {
		const request = await fetcher(`/account/get/${userData.username}`);
		request.error ? setCurrentSlide(prevSlide => updateSlide(prevSlide, "next")) : setStagesType("logIn");
	};

	const handleMainButtonClick = async () => {
		if (stagesType === "main") {
			setStagesType("signUp");
		} else if (stagesType === "signUp") {
			console.log(hasStringByPass(userData.password), userData.password)
			// if ()
			if (hasStringByPass(userData.password)) {
				const result = await fetcher(`/auth/register/v2`, "post", {});

				console.log(result);
			}

			currentSlide === 0 ? accountChecking() : setCurrentSlide(prevSlide => updateSlide(prevSlide, "next"));
		} else {
			console.log("you logged in to gucci fish");
		}
	};

	useEffect(() => {
		if (username.length )
	}, [username, password])

	return (
		<section className='w-screen animate-[fadeIn_0.15s_ease] absolute top-0 h-screen flex flex-col'>
			<AuthStagesSlider
				{...userData}
				setUsername={updateUserData("username")}
				setAvatar={updateUserData("avatar")}
				setDisplayname={updateUserData("displayname")}
				setPassword={updateUserData("password")}
				currentSlide={currentSlide}
				setCurrentSlide={setCurrentSlide}
				type={stagesType}
				setType={setStagesType}
			/>
			<div className='w-full px-5 flex gap-4 pt-5 pb-8'>
				<AuthButton
					stagesType={stagesType}
					isActive={currentSlide >= 1 && currentSlide !== 2}
					id='secondaryButton'
					type='secondary'
					callBack={() => {
						setCurrentSlide(prevSlide => updateSlide(prevSlide, "prev"));
						console.log(currentSlide);
					}}
				/>
				<AuthButton
					id='mainButton'
					isActive={stagesType === "signUp" ? (currentSlide === 0 ? userData.username.length >= 2 : userData.password.length >= 8) : true}
					callBack={handleMainButtonClick}
					text={stagesType === "main" ? "Start blogging" : stagesType === "logIn" ? "Log in to account" : signUpTexts[currentSlide]}
				/>
			</div>
		</section>
	);
}
