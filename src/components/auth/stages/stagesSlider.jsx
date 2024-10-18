
import AuthMainPostSwiping from "./main/postSwiping";
import AuthMainReactions from "./main/reactions";
import { useEffect, useState, useRef } from "preact/hooks";
import AuthMainEditor from "./main/editor";
import { animate } from "motion";
import AuthMainGetStarted from "./main/getStarted";
import AuthSignUpUsername from "./signUp/username";
import AuthSignUpPassword from "./signUp/password";
import AuthSignUpProfile from "./signUp/profile";
import AuthLogInMain from "./logIn/auth";
import { useTheme } from "../../common/contexts/themeContext";

export default function AuthStagesSlider({ type, setType, currentSlide, setCurrentSlide, username, avatar, displayname, password, error, setUsername, setAvatar, setDisplayname, setPassword }) {
	const { theme } = useTheme();
	const [stagesType, setStagesType] = useState("main");
	const [currenAuthSlide, setCurrentAuthSlide] = useState(0);
	const intervalRef = useRef();

	const triggerAnimation = async (transformProps, opacityProps) => {
		await animate("#authStages", { transform: transformProps, opacity: opacityProps }, { duration: 0.15, easing: "ease-out" }).finished;
	};

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			triggerAnimation("translateY(-32px)", 0).then(() => {
				setTimeout(() => {
					setCurrentSlide(prevCount => (prevCount >= 3 ? 0 : prevCount + 1));
					triggerAnimation("translateY(0px)", 1);
				}, 200);
			});
		}, 5000);

		return () => clearInterval(intervalRef.current);
	}, []);

	useEffect(() => {
		if (type !== "main") {
			triggerAnimation("translateY(-32px)", 0).then(() => {
				setTimeout(() => {
					setStagesType(type);
					triggerAnimation("translateY(0px)", 1);
				}, 200);
			});

			setCurrentSlide(0);

			clearInterval(intervalRef.current);
		}
		// 1.53 69 67
	}, [type]);

	useEffect(() => {
		if (type !== "main") {
			triggerAnimation("translateY(-32px)", 0).then(() => {
				setTimeout(() => {
					setCurrentAuthSlide(currentSlide);
					triggerAnimation("translateY(0px)", 1);
				}, 200);
			});
		}
	}, [currentSlide]);

	return (
		<>
			<div id='authStages' className={`flex h-full px-5 justify-center items-center ${currentSlide === 1 && type === "main" ? "" : "gap-4"} flex-col animate-[fadeIn_0.2s_ease]`}>
				{stagesType === "main" ? (
					<>{currentSlide === 0 ? <AuthMainPostSwiping /> : currentSlide === 1 ? <AuthMainReactions /> : currentSlide === 2 ? <AuthMainEditor /> : <AuthMainGetStarted />}</>
				) : stagesType === "signUp" ? (
					<>
						{currenAuthSlide === 0 ? (
							<AuthSignUpUsername username={username} setUsername={setUsername} error={error}/>
						) : currenAuthSlide === 1 ? (
							<AuthSignUpPassword password={password} setPassword={setPassword} error={error}/>
						) : (
							<AuthSignUpProfile avatar={avatar} setAvatar={setAvatar} displayname={displayname} setDisplayname={setDisplayname} error={error}/>
						)}
					</>
				) : (
					<AuthLogInMain setStagesType={setType} password={password} setPassword={setPassword} error={error}/>
				)}
			</div>

			<div className='w-full px-5 flex justify-center gap-4'>
				{[...Array(stagesType === "main" ? 4 : 3)].map((_, i) => (
					<span
						key={i}
						style={
							type === "main"
								? currentSlide === i
									? { background: theme.text, width: "2.5rem" }
									: { background: theme.textPrimaryTransparent, width: "0.75rem" }
								: currenAuthSlide === i
								? { background: theme.text, width: "2.5rem" }
								: { background: theme.textPrimaryTransparent, width: "0.75rem" }
						}
						className='rounded-full h-3 duration-150 ease-out'
					/>
				))}
			</div>
		</>
	);
}
