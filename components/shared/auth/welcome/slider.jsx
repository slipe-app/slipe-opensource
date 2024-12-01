import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import WelcomeFeature from "@/components/shared/auth/welcome/feature";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function AuthSlider() {
	return (
		<Swiper
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
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			effect='creative'
			autoHeight
			loop
			modules={[Pagination, EffectCreative, Autoplay]}
			className='w-full'
		>
			<SwiperSlide>
				<WelcomeFeature img='/static/auth-assets/light-logo.svg' title='Slipe’s blogging' desc='A whole new approach to blogging and browsing, enjoy it' />
			</SwiperSlide>
			<SwiperSlide>
				<WelcomeFeature
					img='/static/auth-assets/light.png'
					title='At speed of light'
					desc='A whole new level of application speed and startup speed'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<WelcomeFeature
					img='/static/auth-assets/pallete.png'
					title='My app my style'
					desc='Customize from theme to animations, gestures and app features'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<WelcomeFeature
					img='/static/auth-assets/smile.png'
					title="That's quite a post"
					desc='Reactions instead of likes on posts and comments, a whole new level'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<WelcomeFeature
					img='/static/auth-assets/eyes.png'
					title="It's so convenient"
					desc="The way you view posts has gone to a new level, it's pretty convient"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
