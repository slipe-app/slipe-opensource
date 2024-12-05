import WelcomeFeaturesSlider from "@/components/shared/auth/welcome/slider";
import { Button } from "@/components/ui/button";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { redirect } from "react-router";
import { useEffect, useRef, useState } from "react";
import SignUpSlider from "@/components/shared/auth/sign-up/slider";
import LogInSlider from "@/components/shared/auth/log-in/log-in";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import isRegistrationDataCorrect from "@/lib/auth/signUp/isDataCorrect";
import auth from "@/lib/auth/auth";
import { toast } from "sonner";

import "swiper/css";
import "swiper/css/effect-creative";

export default function Auth() {
	const [stage, setStage] = useState(0);
	const [signUpStage, setSignUpStage] = useState(0);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [displayname, setDisplayname] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isContinue, setIsContinue] = useState(true);

	const swiperRef = useRef(null);

	const buttonText = () => {
		switch (stage) {
			case 1:
				if (signUpStage >= 3) {
					return "Start exploring";
				} else {
					return "Continue";
				}
			case 2:
				return "Sign in to account";
			default:
				return "Start blogging";
		}
	};

	const newSlide = () => {
		stage == 1 ? setSignUpStage(stage => stage + 1) : setStage(1);
	};

	// sign up button
	async function authButton(type) {
		console.log(stage);
		if (stage === 0) return newSlide();
		else if (signUpStage === 0 || signUpStage === 1) {
			const isDataCorrect = isRegistrationDataCorrect(username, password)[signUpStage]
			if (!isDataCorrect.success) {
				toast.error(isDataCorrect?.message, { className: "bg-red text-red-foreground" });
			} else {
				newSlide();
			}
		} else if ((stage === 1 && signUpStage == 1) || stage === 2) {
			await auth(
				type,
				username,
				password,
				() => setIsContinue(false),
				token => {
					if (type === "signup") {
						setIsContinue(true);
						newSlide();
					} else {
						redirect("/");
					}
				},
				error => {
					setIsContinue(true);
					toast.error(error, { className: "bg-red text-red-foreground" });
				}
			);
		} else newSlide();
	}

	useEffect(() => {
		swiperRef?.current.swiper.slideTo(stage);
	}, [stage]);

	// sign up inputs checks
	// useEffect(() => {
	// 	if (stage === 0) setIsContinue(true);
	// 	else if ([0, 1].includes(signUpStage)) {
	// 		toast.error(isRegistrationDataCorrect(username, password)[signUpStage]?.message, { className: "bg-red text-red-foreground" });
	// 	} else setIsContinue(true);
	// }, [stage, signUpStage, username, password]);

	// sign in inputs checks
	useEffect(() => {
		if (stage === 2) {
			if (username?.length > 0 && password?.length > 0) setIsContinue(true);
			else setIsContinue(false);
		}
	}, [stage, username, password]);

	return (
		<div className='h-full flex flex-col animate-[fadeIn_0.3s_ease-out]'>
			<div className='flex justify-center items-center h-full w-full'>
				<Swiper
					ref={swiperRef}
					creativeEffect={{
						prev: {
							opacity: 0,
							translate: ["-50%", 0, 0],
						},
						next: {
							opacity: 0,
							translate: ["50%", 0, 0],
						},
					}}
					allowTouchMove={false}
					effect='creative'
					modules={[EffectCreative]}
					className='w-full h-full'
				>
					<SwiperSlide className='!flex items-center'>
						<WelcomeFeaturesSlider />
					</SwiperSlide>
					<SwiperSlide className='!flex items-center'>
						<SignUpSlider
							signUpStage={signUpStage}
							isAccount={setStage}
							setAvatar={setAvatar}
							setPassword={setPassword}
							setUsername={setUsername}
							setDisplayname={setDisplayname}
						/>
					</SwiperSlide>
					<SwiperSlide className='!flex items-center'>
						<LogInSlider isAccount={setStage} setUsername={setUsername} setPassword={setPassword} />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='p-5 flex gap-4'>
				<Button
					data-isexpanded={signUpStage == 1}
					className='data-[isexpanded=false]:-mr-[4.5rem] data-[isexpanded=false]:pointer-events-none data-[isexpanded=true]:-mr-0 data-[isexpanded=false]:opacity-0 data-[isexpanded=true]:opacity-100'
					onClick={() => setSignUpStage(stage => stage - 1)}
					variant='secondary'
					size='icon'
				>
					<Svg icon={icons["chevronLeft"]} className='!w-7 !h-7' />
				</Button>
				{/* TODO: add text switching animation */}
				<Button disabled={!isContinue} onClick={async () => await authButton(stage === 2 ? "login" : "signup")} size='full'>
					{buttonText()}
				</Button>
			</div>
		</div>
	);
}
