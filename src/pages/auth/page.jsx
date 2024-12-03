import WelcomeFeaturesSlider from "@/components/shared/auth/welcome/slider";
import { Button } from "@/components/ui/button";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-creative";
import SignUpSlider from "@/components/shared/auth/sign-up/slider";
import LogInSlider from "@/components/shared/auth/log-in/log-in";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";

export default function Auth() {
	const [stage, setStage] = useState(0);
	const [signUpStage, setSignUpStage] = useState(0);
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

	useEffect(() => {
		swiperRef?.current.swiper.slideTo(stage);
	}, [stage]);

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
						<SignUpSlider signUpStage={signUpStage} isAccount={setStage} />
					</SwiperSlide>
					<SwiperSlide className='!flex items-center'>
						<LogInSlider isAccount={setStage} />
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
				<Button onClick={() => (stage == 1 ? setSignUpStage(stage => stage + 1) : setStage(1))} size='full'>
					{buttonText()}
				</Button>
			</div>
		</div>
	);
}
