import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, FreeMode } from "swiper/modules";
import { Publication, Comment, Reaction } from "../profile";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-creative";

export default function Publications() {
	const [swiper, setSwiper] = useState(null);
	const [active, setActive] = useState(0);

	const switcherButton = index => {
		setActive(index);
		swiper?.slideTo(index);
	};

	useEffect(() => {
		document.getElementById("content-switcher")?.scrollTo({
			left: document.getElementById(`switcher-button-${active}`).offsetLeft - 20,
			behavior: "smooth",
			block: "start",
		});
	}, [active]);

	return (
		<div className='flex flex-col gap-4'>
			<div id='content-switcher' className='flex gap-6 text-white font-medium text-2xl px-5 overflow-x-auto'>
				<button
					onClick={() => switcherButton(0)}
					id='switcher-button-0'
					data-active={active === 0}
					className='duration-200 ease-out data-[active=true]:opacity-100 opacity-50'
				>
					Publications
				</button>
				<button
					onClick={() => switcherButton(1)}
					id='switcher-button-1'
					data-active={active === 1}
					className='duration-200 ease-out data-[active=true]:opacity-100 opacity-50'
				>
					Comments
				</button>
				<button
					onClick={() => switcherButton(2)}
					id='switcher-button-2'
					data-active={active === 2}
					className='duration-200 ease-out data-[active=true]:opacity-100 opacity-50'
				>
					Reactions
				</button>
			</div>
			<Swiper
				onSwiper={setSwiper}
				resistance={true}
				resistanceRatio={0}
				onActiveIndexChange={slider => setActive(slider.activeIndex)}
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
				className='w-full px-5 pb-[5.5rem]'
				slidesPerView={1}
				modules={[FreeMode, EffectCreative]}
			>
				<SwiperSlide className='grid grid-cols-2 h-fit gap-5'>
					<Publication />
					<Publication />
					<Publication />
					<Publication />
					<Publication />
				</SwiperSlide>
				<SwiperSlide className='flex flex-col h-fit gap-5'>
					<Comment user={{avatar: "./static/testa-assets/mango.jpg", nickname: "Mango men"}} content="Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo " />
					<Comment user={{avatar: "./static/testa-assets/mango.jpg", nickname: "Mango men"}} content="Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo " />
					<Comment user={{avatar: "./static/testa-assets/mango.jpg", nickname: "Mango men"}} content="Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo Yoooo " />
				</SwiperSlide>
				<SwiperSlide className='grid grid-cols-3 h-fit gap-5'>
					<Reaction/>
					<Reaction/>
					<Reaction/>
					<Reaction/>
					<Reaction/>
					<Reaction/>
					<Reaction/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
