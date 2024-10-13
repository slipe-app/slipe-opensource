import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import AuthStagesSlider from "../stages/stagesSlider";
import fetcher from "../../../utils/fetcher";
import hasStringByPass from "../../../utils/auth/passwordChecks";
import validateUsername from "../../../utils/auth/usernameChecks";

const signUpTexts = ["Next > Password", "Next > Profile", "Dive into blogging"];

const updateSlide = (currentSlide, direction) => {
	if (direction === "next") return Math.min(currentSlide + 1, 2);
	if (direction === "prev") return Math.max(currentSlide - 1, 0);
	return currentSlide;
};

const getImageBlobById = async src => {
	const response = await fetch(src, { mode: "cors" });
	const data = await response.blob();

	return data;
};

export default function AuthMainScreenWrapper() {
	const [stagesType, setStagesType] = useState("main");
	const [currentSlide, setCurrentSlide] = useState(0);
	const [userData, setUserData] = useState({ username: "", avatar: "", displayname: "", password: "" });
	const [isContinue, setIsContinue] = useState(true);

	const updateUserData = key => value => setUserData(prevData => ({ ...prevData, [key]: value }));

	const accountChecking = async () => {
		const request = await fetcher(`/account/get/${userData.username}`);
		request.error ? setCurrentSlide(prevSlide => updateSlide(prevSlide, "next")) : setStagesType("logIn");
	};

	const handleMainButtonClick = async () => {
		console.log(stagesType, currentSlide)
		if (stagesType === "main") {
			setStagesType("signUp");
		} else if (stagesType === "signUp") {
			if (currentSlide === 1 && userData.password) {
				setIsContinue(false);

				const result = await fetcher(`/auth/register/v2`, "post", JSON.stringify({
					username: userData?.username,
					password: userData?.password
				}), { 'Content-Type': 'application/json' });
				console.log(result)

				if (result?.token) {
					console.log(result.token) // token

					setCurrentSlide(prevSlide => updateSlide(prevSlide, "next"))
				} else {
					console.log(result?.code); // input
					console.log(result?.description_code); // localization
					setIsContinue(true);
				}
			} else if (currentSlide === 2) {
				if (userData.avatar || userData.displayname) {
					console.log(userData.avatar, userData.displayname)
					// request
				} else {
					console.log(123)
					// redirect
				}
			} else {
				currentSlide === 0 ? accountChecking() : setCurrentSlide(prevSlide => updateSlide(prevSlide, "next"));
			}
		} else if (stagesType === "logIn") {
			if (currentSlide === 0 && userData.password) {
				setIsContinue(false);

				const result = await fetcher(`/auth/login/v2`, "post", JSON.stringify({
					username: userData?.username,
					password: userData?.password
				}), { 'Content-Type': 'application/json' });
				console.log(result)

				if (result?.token) {
					console.log(result.token) //token

					// redirect
				} else {
					console.log(result?.code); // input
					console.log(result?.description_code); // localization
					setIsContinue(true);
				}
			}
		} else {
			console.log("you logged in to gucci fish");
		}
	};

	useEffect(() => {
		if (stagesType === "signUp") {
			setIsContinue(false);

			const isUsernameCorrect = validateUsername(userData?.username)[0];
			const isPasswordCorrect = hasStringByPass(userData?.password)[0];

			if (isUsernameCorrect && currentSlide === 0) setIsContinue(true);
			else if (isPasswordCorrect && currentSlide === 1) setIsContinue(true);
			else if (currentSlide === 2) setIsContinue(true);
		} else if (stagesType === "logIn") {
			setIsContinue(false);

			const isPasswordCorrect = hasStringByPass(userData?.password)[0];

			if (isPasswordCorrect && currentSlide === 0) setIsContinue(true);
		}
	}, [userData, currentSlide, stagesType]);

	useEffect(() => {
		console.log(isContinue)
	}, [isContinue]);

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
					isActive={isContinue}
					callBack={handleMainButtonClick}
					text={stagesType === "main" ? "Start blogging" : stagesType === "logIn" ? "Log in to account" : signUpTexts[currentSlide]}
				/>
			</div>
		</section>
	);
}
