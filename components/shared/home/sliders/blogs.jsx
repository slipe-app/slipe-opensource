import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Virtual } from "swiper/modules";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/utils";
import api from "@/constants/api";
import clsx from "clsx";
import { useStorage } from "@/hooks/contexts/session";

import "swiper/css";
import "swiper/css/effect-creative";
import { PostInfoModal } from "../../modals";
import Post from "../slides/post/post";

export default function BlogsSlider({ blogs }) {
	const [allBlogs, setBlogs] = useState();
	const [deletedBlogs, setDeletedBlogs] = useState([]);
	const [user, setUser] = useState();
	const { token, store } = useStorage();
	const [isHolding, setIsHolding] = useState(false);
	const [timer, setTimer] = useState();
	const [currentTouchedPost, setCurrentTouchedPost] = useState(null);

	const handleTouchStart = (post) => {
		const newTimer = setTimeout(() => {
			setCurrentTouchedPost(post);
			setIsHolding(true);
		}, 1000);
		setTimer(newTimer);
	};

	const handleTouchEnd = () => {
		setCurrentTouchedPost(null);
		clearTimeout(timer);
		setIsHolding(false);
	};

	async function onSlideChange(slide) {
		const currentSlide = slide.activeIndex;
		const greatestIndex = allBlogs.length - 1;
		const lastBlog = allBlogs[greatestIndex];

		if (greatestIndex - currentSlide === 1) {
			const reqBlogs = await fetcher(`${api.v1}/post/get?after=${lastBlog?.id}&user=${user.id}&limit=3`, "get", null, {
				Authorization: "Bearer " + token,
			});

			setBlogs(oldValue => [...oldValue, ...reqBlogs?.success]);
		}
	}

	async function deleteBlog (id) {
		const post = blogs.find(post => post?.id === id);
		
		setDeletedBlogs(posts => [...posts, post]);
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
						onMouseDown={() => handleTouchStart(blog)}
						onMouseUp={handleTouchEnd}
						key={index}
						className={clsx("flex justify-center !overflow-visible", index == 0 || 5 ? "opacity-0" : "")}
						virtualIndex={index}
					>
						<Post user={user} setUser={setUser} blog={blog} isBlogDeleted={deletedBlogs.includes(blog)}/>
					</SwiperSlide>
				))}
			</Swiper>
			<PostInfoModal open={isHolding} setOpen={setIsHolding} post={currentTouchedPost} deleteBlog={deleteBlog} />
		</>
	);
}
