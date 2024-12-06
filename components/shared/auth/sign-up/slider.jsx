import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import UsernameSlide from "./slides/username";
import { useEffect, useState, useRef } from "react";
import PasswordSlide from "./slides/password";
import ProfileSlide from "./slides/profile";
import CategoriesSlide from "./slides/categories";

import "swiper/css";
import "swiper/css/effect-creative";

export default function SignUpSlider({ isAccount, signUpStage, setUsername, setDisplayname, setAvatar, setPassword }) {
	const [username, setSignUpUsername] = useState("");
	const [displayname, setSignUpDisplayname] = useState("");
	const [avatar, setSignUpAvatar] = useState("");
	const [password, setSignUpPassword] = useState("");
	const [categoriesPack, setCategoriesPack] = useState(0);
    const swiperRef = useRef(null);

	useEffect(() => {
		swiperRef?.current.swiper.slideTo(signUpStage);
	}, [signUpStage]);

	useEffect(() => {
		setUsername(username);
		setDisplayname(displayname);
		setAvatar(avatar);
		setPassword(password);
	}, [username, displayname, avatar, password]);

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
				<UsernameSlide username={username} isAccount={isAccount} setUsername={setSignUpUsername} />
			</SwiperSlide>
			<SwiperSlide>
				<PasswordSlide password={password} setPassword={setSignUpPassword} />
			</SwiperSlide>
			<SwiperSlide>
				<ProfileSlide avatar={avatar} setAvatar={setSignUpAvatar} displayname={displayname} setDisplayname={setSignUpDisplayname} />
			</SwiperSlide>
			<SwiperSlide>
				<CategoriesSlide categoriesPack={categoriesPack} setCategoriesPack={setCategoriesPack} />
			</SwiperSlide>
		</Swiper>
	);
}
