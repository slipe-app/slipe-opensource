import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import AuthStagesSlider from "../stages/stagesSlider";
import fetcher from "../../../utils/fetcher";
import hasStringByPass from "../../../utils/auth/passwordChecks";
import validateUsername from "../../../utils/auth/usernameChecks";
import { useLocation } from 'preact-iso';
import { useStorage } from "../../common/contexts/sessionContext";

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
	const [error, setError] = useState(null);
	const location = useLocation();
	const { token, store } = useStorage();

	const updateUserData = key => value => setUserData(prevData => ({ ...prevData, [key]: value }));

	const accountChecking = async () => {
		const request = await fetcher(`/account/get/${userData.username}`);
		request.error ? setCurrentSlide(prevSlide => updateSlide(prevSlide, "next")) : setStagesType("logIn");
	};

	const handleMainButtonClick = async () => {
		if (stagesType === "main") setStagesType("signUp");
		else if (stagesType === "signUp") {
			if (currentSlide === 1 && userData.password) {
				setIsContinue(false);

				const result = await fetcher(`/auth/register/v2`, "post", JSON.stringify({
					username: userData?.username,
					password: userData?.password
				}), { 'Content-Type': 'application/json' });

				if (result?.token) {
					// save session
					await store.set("token", result.token)
					await store.save()

					setCurrentSlide(prevSlide => updateSlide(prevSlide, "next"))
				} else {
					setError([false, result?.error]);

					console.log(result?.code); // input
					console.log(result?.description_code); // localization

					setIsContinue(true);
				}
			} else if (currentSlide === 2) {
				if (userData.avatar || userData.displayname) {
					const avatar = await fetch(userData.avatar).then(async res => await res.blob())

					const formData = new FormData();
					formData.append('avatar', new File([avatar], "avatar.png", {
						type: avatar?.type
					}));
					formData.append('username', userData.username);
					formData.append('nickname', userData.displayname);

					const result = await fetcher(`/settings/profile`, "post", formData, { "Authorization": "Bearer " + await store.get("token") });

					location.route('/');
				} else {
					// redirect
					location.route('/');
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
					// save session
					await store.set("token", result.token)
					await store.save()

					// redirect
					location.route('/');
				} else {
					setError([false, result?.error])

					console.log(result?.code); // input
					console.log(result?.description_code); // localization
					setIsContinue(true);
				}
			}
		} else console.log("you logged in to gucci fish");
	};

	useEffect(() => {
		if (stagesType === "signUp" || stagesType === "logIn") {
			setIsContinue(false);

			if (stagesType === "signUp" && validateUsername(userData?.username)[0] && currentSlide === 0) setIsContinue(true);
			else if (stagesType === "signUp" && hasStringByPass(userData?.password)[0] && currentSlide === 1) setIsContinue(true);
			else if (stagesType === "logIn" && hasStringByPass(userData?.password)[0] && currentSlide === 0) setIsContinue(true);
			else if (currentSlide === 2) setIsContinue(true);
		}
	}, [userData, currentSlide, stagesType]);

	useEffect(() => {
		if (stagesType === "signUp" && currentSlide === 0 && userData.username.length > 0) setError(validateUsername(userData.username))
		else if (stagesType === "signUp" && currentSlide === 1 && userData.password.length > 0) setError(hasStringByPass(userData.password))
		else if (stagesType === "logIn" && currentSlide === 0 && userData.password.length > 0) setError(hasStringByPass(userData.password))
		else setError(null)
	}, [userData, currentSlide, stagesType]);

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
				error={error}
			/>
			<div className='w-full px-5 flex gap-4 pt-5 pb-8'>
				<AuthButton
					stagesType={stagesType}
					isActive={currentSlide >= 1 && currentSlide !== 2}
					id='secondaryButton'
					type='secondary'
					callBack={() => setCurrentSlide(prevSlide => updateSlide(prevSlide, "prev"))}
				/>
				<AuthButton
					id='mainButton'
					isActive={isContinue}
					callBack={handleMainButtonClick}
					text={stagesType === "main" ? "Start blogging" : stagesType === "logIn" ? "Log in to account".split() : signUpTexts[currentSlide]}
				/>
			</div>
		</section>
	);
}
