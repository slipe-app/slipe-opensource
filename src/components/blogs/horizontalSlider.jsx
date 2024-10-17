import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";
import { Image } from "@unpic/preact";
import PostUserBlock from "./post/userBlock";

export default function BlogsSlider({ user, blogs }) {
	return (
		<>
			<Swiper
				effect={"creative"}
				creativeEffect={{
					limitProgress: 2,
					prev: {
						opacity: 0.4,
						scale: 0.75,
						rotate: [0, 0, -10],
						translate: [-75, 0, 0],
					},
					next: {
						opacity: 0.4,
						rotate: [0, 0, 10],
						scale: 0.75,
						translate: [75, 0, 0],
					},
				}}
				modules={[EffectCreative]}
				className='!w-full !h-full py-28'
			>
				<SwiperSlide className='px-5'>
          <PostUserBlock/>
					<Image width={1600} height={1600} src='postsExamples/banana.jpg' className='!w-[calc(100%-2.5rem)] -z-10 absolute top-0 rounded-[2rem] block h-full bg-white' />
				</SwiperSlide>
				<SwiperSlide className='px-5'>
					<Image width={1600} height={1600} src='postsExamples/france.jpg' className='w-full rounded-[2rem] block h-full bg-red-500' />
				</SwiperSlide>
				<SwiperSlide className='px-5'>
					<Image width={1600} height={1600} src='postsExamples/gucciFish.webp' className='w-full rounded-[2rem] block h-full bg-green-500' />
				</SwiperSlide>
				<SwiperSlide className='px-5'>
					<Image width={1600} height={1600} src='postsExamples/popKybi.jpeg' className='w-full rounded-[2rem] block h-full bg-yellow-500' />
				</SwiperSlide>
				<SwiperSlide className='px-5'>
					<Image width={1600} height={1600} src='postsExamples/skibidi.jpg' className='w-full rounded-[2rem] block h-full bg-pink-500' />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
