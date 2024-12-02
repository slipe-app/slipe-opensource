import WelcomeFeaturesSlider from "@/components/shared/auth/welcome/slider";
import { Button } from "@/components/ui/button";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-creative";
import SignUpSlider from "@/components/shared/auth/sign-up/slider";
import LogInSlider from "@/components/shared/auth/log-in/log-in";

export default function Auth() {
	const [stage, setStage] = useState(0);
	const [signUpStage, setSignUpStage] = useState(0);
	const swiperRef = useRef(null);

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
					<SwiperSlide className="!flex items-center">
						<WelcomeFeaturesSlider />
					</SwiperSlide>
					<SwiperSlide className="!flex items-center">
						<SignUpSlider signUpStage={signUpStage} isAccount={setStage} />
					</SwiperSlide>
					<SwiperSlide className="!flex items-center">
						<LogInSlider isAccount={setStage} />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='p-5'>
				<Button onClick={() => stage == 1 ? setSignUpStage((stage) => stage + 1) : setStage(1)} size='full'>
					Start blogging
				</Button>
			</div>
		</div>
	);
}
