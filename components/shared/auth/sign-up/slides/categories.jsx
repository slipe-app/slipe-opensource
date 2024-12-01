import SlideTemplate from "../slide-template";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function CategoriesSlide({ categoriesPack, setCategoriesPack }) {
	return (
		<>
			<div className='flex flex-col gap-4 items-center'>
				<SlideTemplate title='Choose categories' img='/static/auth-assets/globe.png' />
				<Swiper
					slidesPerView={1.225}
                    centeredSlides
					creativeEffect={{
                        limitProgress: 4,
						prev: {
							opacity: 0.5,
							translate: ["-107%", 0, 0],
						},
						next: {
							opacity: 0.5,
							translate: ["107%", 0, 0],
						},
					}}
					pagination={{
						clickable: true,
					}}
					effect='creative'
                    autoHeight
					modules={[Pagination, EffectCreative]}
					className='w-full !flex flex-col gap-2'
				>
					<SwiperSlide className='grid grid-cols-2 bg-white rounded-3xl aspect-square grid-rows-2 gap-3'></SwiperSlide>
					<SwiperSlide className='grid grid-cols-2 bg-primary rounded-3xl aspect-square grid-rows-2 gap-3'></SwiperSlide>
					<SwiperSlide className='grid grid-cols-2 bg-red-500 rounded-3xl aspect-square grid-rows-2 gap-3'></SwiperSlide>
					<SwiperSlide className='grid grid-cols-2 bg-green-500 rounded-3xl aspect-square grid-rows-2 gap-3'></SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
