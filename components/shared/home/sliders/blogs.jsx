import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Virtual } from "swiper/modules";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/utils";
import cdn from "@/constants/cdn";
import api from "@/constants/api";
import ActionsBlock from "../slides/post/actions-block";
import UserBlock from "../slides/post/user-block";
import clsx from "clsx";
import { useStorage } from "@/hooks/contexts/session";

import "swiper/css";
import "swiper/css/effect-creative";


export default function BlogsSlider({ blogs }) {
	const [allBlogs, setBlogs] = useState();
	const [user, setUser] = useState();
	const { token, store } = useStorage();

	async function onSlideChange(slide) {
		const currentSlide = slide.activeIndex;
		const greatestIndex = allBlogs.length - 1;
		const lastBlog = allBlogs[greatestIndex];

		if (greatestIndex - currentSlide === 1) {
			const reqBlogs = await fetcher(`${api.v1}/post/get?after=${lastBlog?.id}&user=${user.id}&limit=3`, "get", null, { Authorization: "Bearer " + token });

			setBlogs(oldValue => [...oldValue, ...reqBlogs?.success]);
		}
	}

	useEffect(() => {
		setBlogs(blogs);
		setUser(blogs[0]?.author);
	}, [blogs]);
	return (
		<>
			<Swiper
				slidesPerView={2}
				centeredSlides={true}
				modules={[EffectCreative, Virtual]}
				effect={"creative"}
				creativeEffect={{
					limitProgress: 4,
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
				className='w-full h-full py-[6.5rem] animate-[fadeIn_0.3s_ease-out]'
				onSlideChange={onSlideChange}
				virtual={true}
			>
				{allBlogs?.map((blog, index) => (
					<SwiperSlide
						// data-isphantom={index == 0 || index == 5}
						key={index}
						className={clsx('flex justify-center !overflow-visible', index == 0 || 5 ? "opacity-0" : "")}
						virtualIndex={index}
					>
						<div
							id={index}
							className='flex bg-card w-[calc(200%-2.5rem)] absolute rounded-[2rem] justify-between h-full overflow-hidden items-center flex-col'
						>
							<UserBlock user={user} setUser={setUser} date={blog?.date} />
							<img src={cdn + `/posts/${blog?.image}`} className='w-full object-contain h-full absolute top-0 block' />
							<ActionsBlock id={blog?.id} currentReaction={blog.reaction} reactions={blog.reactions} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
