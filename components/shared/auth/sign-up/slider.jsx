import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import WelcomeFeature from "@/components/shared/auth/welcome/feature";

import "swiper/css";
import "swiper/css/effect-creative";
import UsernameSlide from "./slides/username";
import { useEffect, useState, useRef } from "react";
import PasswordSlide from "./slides/password";

export default function SignUpSlider({ isAccount, signUpStage }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const swiperRef = useRef(null);

	useEffect(() => {
		swiperRef?.current.swiper.slideTo(signUpStage);
	}, [signUpStage]);

	return (
		<Swiper
            ref={swiperRef}
			creativeEffect={{
				prev: {
					opacity: 0,
					translate: ["-100%", 0, 0],
				},
				next: {
					opacity: 0,
					translate: ["100%", 0, 0],
				},
			}}
			allowTouchMove={false}
			effect='creative'
			modules={[EffectCreative]}
			className='w-full'
		>
			<SwiperSlide>
				<UsernameSlide username={username} isAccount={isAccount} setUsername={setUsername} />
			</SwiperSlide>
			<SwiperSlide>
				<PasswordSlide password={password} setPassword={setPassword} />
			</SwiperSlide>
		</Swiper>
	);
}
