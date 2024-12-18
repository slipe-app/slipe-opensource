import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

export default function Publications() {
	return (
		<>
			<Swiper
				resistance={true}
				resistanceRatio={0}
				creativeEffect={{
					prev: {
						opacity: 0,
						translate: ["-106%", 0, 0],
					},
					next: {
						opacity: 0,
						translate: ["106%", 0, 0],
					},
				}}
				effect='creative'
				className='w-full px-5'
				slidesPerView={1}
				modules={[FreeMode, EffectCreative]}
			>
				<SwiperSlide className='w-full'>
					<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
