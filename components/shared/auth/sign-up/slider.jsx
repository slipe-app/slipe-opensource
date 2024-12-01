import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import WelcomeFeature from "@/components/shared/auth/welcome/feature";

import "swiper/css";
import "swiper/css/effect-creative";
import UsernameSlide from "./slides/username";
import { useEffect, useState, useRef } from "react";
import PasswordSlide from "./slides/password";
import ProfileSlide from "./slides/profile";
import CategoriesSlide from "./slides/categories";

export default function SignUpSlider({ isAccount, signUpStage }) {
	const [username, setUsername] = useState("");
	const [displayname, setDisplayname] = useState("");
	const [avatar, setAvatar] = useState("");
	const [password, setPassword] = useState("");
	const [categoriesPack, setCategoriesPack] = useState(0);
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
			autoHeight
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
			<SwiperSlide>
				<ProfileSlide avatar={avatar} setAvatar={setAvatar} displayname={displayname} setDisplayname={setDisplayname} />
			</SwiperSlide>
			<SwiperSlide>
				<CategoriesSlide categoriesPack={categoriesPack} setCategoriesPack={setCategoriesPack} />
			</SwiperSlide>
		</Swiper>
	);
}
