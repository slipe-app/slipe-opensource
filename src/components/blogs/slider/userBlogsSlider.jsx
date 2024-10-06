import { useEffect, useState, useRef } from "preact/hooks";
import { useKeenSlider } from "keen-slider/react";
import SliderSlide from "./sliderSlide/sliderSlide";
import "keen-slider/keen-slider.min.css";
import cdn_url from "../../../constants/cdn_url";
import MutationPlugin from "../../../utils/observerMutation";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";


export default function UsersBlogsSlider({ user, blogs }) {
	const postCounts = Number(blogs[0]?.author?.postsCount);
	const slidesPerView = postCounts >= 3 ? 3 : postCounts;
	const [userBlogs, setUserBlogs] = useState(blogs.filter(blog => blog?.author?.username === user));
	const [details, setDetails] = useState(null);
	const [loadMoreTrigger, setLoadMoreTrigger] = useState(null);
	const userBlogsRef = useRef(userBlogs);

	const { data: moreUserBlogs, error, isLoading } = useSWR(loadMoreTrigger ? `/post/get?after=${loadMoreTrigger.id}&user=${loadMoreTrigger.author.id}` : null, fetcher);

	useEffect(() => {
		if (moreUserBlogs?.success) {
			setUserBlogs(prevBlogs => {
				const updatedBlogs = [...prevBlogs, ...moreUserBlogs?.success?.flatMap(post => ({ ...post, author: loadMoreTrigger.author }))];
				userBlogsRef.current = updatedBlogs;
				return updatedBlogs;
			});
		}
	}, [isLoading]);

	const [sliderRef] = useKeenSlider(
		{
			detailsChanged(s) {
				setDetails(s.track.details.slides);
			},
			slideChanged(slide) {
				const currentSlideIndex = slide.track.details.abs;
				const greatestBlogsIndex = userBlogsRef.current.length - 1;
				const lastBlog = userBlogsRef.current[greatestBlogsIndex];
				const author = lastBlog?.author;

				if (currentSlideIndex === greatestBlogsIndex) {
					setLoadMoreTrigger(lastBlog);
				}
			},
			loop: {
				min: 0,
				max: userBlogs.length - 1,
			},
			range: {
				min: 0,
				max: userBlogs.length - 1,
			},
			selector: ".users__slider > .user__slide",
			slides: {
				perView: 1.125,
				origin: "center",
				spacing: -10,
				number: slidesPerView,
			},
		},
		[MutationPlugin]
	);

	const scaleStyle = idx => {
		if (!details) return {};
		const progress = details[idx];
		const scale_size = 0.14;
		const opacity_size = 0.6;
		const scale = 1 - (scale_size - scale_size * progress?.portion);
		const opacity = 1 - (opacity_size - opacity_size * progress?.portion);
		return {
			opacity,
			transform: `scale(${scale})`,
			WebkitTransform: `scale(${scale})`,
		};
	};

	return (
		<>
			{userBlogs ? (
				<div ref={sliderRef} className='keen-slider users__slider perspective-[1000px] h-full'>
					{[...Array(slidesPerView).keys()].map(idx => (
						<>
							<div key={idx} id={idx} className='keen-slider__slide animate-[fadeIn_0.2s_ease] user__slide'>
								{details ? <SliderSlide style={scaleStyle(idx)} blog={userBlogs[details[idx]?.abs]} key={idx} author={userBlogs[details[idx]?.abs]?.author} /> : null}
							</div>
						</>
					))}
				</div>
			) : null}
		</>
	);
}
