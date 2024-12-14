import UserCard from "./user-card";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function NoFollowers() {
	return (
		<div className='w-full h-full flex-col flex justify-center animate-[fadeIn_0.3s_ease-out] items-center gap-4'>
			<div className='flex flex-col gap-2 items-center'>
				<img src='./static/states-assets/nothing.png' className='w-40 h-40' />
				<span className='text-3xl text-foreground font-semibold'>You have no follows</span>
			</div>
			<Swiper
				creativeEffect={{
					prev: {
						opacity: 0.4,
						translate: ["-106%", 0, 0],
					},
					next: {
						opacity: 0.4,
						translate: ["106%", 0, 0],
					},
				}}
				effect='creative'
				slidesPerView='auto'
				pagination={{
					clickable: true,
				}}
				autoHeight
				modules={[Pagination, EffectCreative]}
				className='w-full px-5 swiper-followers'
			>
				<SwiperSlide className='gap-5 flex'>
					<UserCard />
					<UserCard />
				</SwiperSlide>
				<SwiperSlide className='gap-5 flex'>
					<UserCard />
					<UserCard />
				</SwiperSlide>
				<SwiperSlide className='gap-5 flex'>
					<UserCard />
					<UserCard />
				</SwiperSlide>
				<SwiperSlide className='gap-5 flex'>
					<UserCard />
					<UserCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
