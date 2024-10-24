import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Virtual } from "swiper/modules";
import { Image } from "@unpic/preact";
import { useState, useEffect } from "preact/hooks";
import fetcher from "../../utils/fetcher";
import cdn_url from "../../constants/cdn_url";
import { useStorage } from "../common/contexts/sessionContext";
import ActionsBlock from "./post/actionsBlock/actionsBlock";
import UserBlock from "./post/userBlock";

export default function BlogsSlider({ blogs }) {
	const [allBlogs, setBlogs] = useState();
	const [user, setUser] = useState();
	const { token, store } = useStorage();

	useEffect(() => {
		setBlogs(blogs);
		setUser(blogs[0]?.author);
	}, [blogs]);

	async function onSlideChange(slide) {
		const currentSlide = slide.activeIndex;
		const greatestIndex = allBlogs.length - 1;
		const lastBlog = allBlogs[greatestIndex];

		if (greatestIndex - currentSlide === 1) {
			const reqBlogs = await fetcher(`/post/get?after=${lastBlog?.id}&user=${user.id}&limit=3`, "get", null, { Authorization: "Bearer " + token });

			setBlogs(oldValue => [...oldValue, ...reqBlogs?.success]);
		}
	}

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
				className='!w-full !h-full py-28'
				onSlideChange={onSlideChange}
				virtual
			>
				{allBlogs?.map((blog, index) => (
					<SwiperSlide key={index} className={`!overflow-visible flex flex-col no3d justify-between ${index == 0 || 5 ? "opacity-0" : ""} items-center`} virtualIndex={index}>
						<UserBlock user={user} setUser={setUser} date={blog?.date} />
						<Image width={1600} height={1600} src={cdn_url + `/posts/${blog?.image}`} className='!w-[calc(200%-2.5rem)] -z-10 absolute top-0 rounded-[2rem] block h-full bg-black' />
						<ActionsBlock id={blog?.id} reactions={blog.reactions} />
					</SwiperSlide>
				))}
			</Swiper>
			{/*All modals, sheets and etc located below*/}
		</>
	);
}
