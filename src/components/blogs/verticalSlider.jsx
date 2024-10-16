import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import BlogsSlider from "./horizontalSlider";

export default function UsersSlider() {
	return (
		<>
			<Swiper
				direction='vertical'
				className='!w-full !h-full'
			>
				<SwiperSlide className="!w-full !h-full">
					<BlogsSlider />
				</SwiperSlide>
				<SwiperSlide className="!w-full !h-full">
					<BlogsSlider />
				</SwiperSlide>
				<SwiperSlide className="!w-full !h-full">
					<BlogsSlider />
				</SwiperSlide>
				<SwiperSlide className="!w-full !h-full">
					<BlogsSlider />
				</SwiperSlide>
				<SwiperSlide className="!w-full !h-full">
					<BlogsSlider />
				</SwiperSlide>
				
			</Swiper>
		</>
	);
}
