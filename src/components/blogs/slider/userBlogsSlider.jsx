import { useEffect, useState, useRef } from "preact/hooks";
import { useKeenSlider } from "keen-slider/react";
import SliderSlide from "./sliderSlide/sliderSlide";
import cdn_url from "../../../constants/cdn_url";
import MutationPlugin from "../../../utils/observerMutation";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const images = ["/postsExamples/banana.jpg", "/postsExamples/popKybi.jpeg", "/postsExamples/s&m.png", "/postsExamples/skibidi.jpg"];

export default function UsersBlogsSlider({ user, blogs }) {
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
				setDetails(s.track.details);
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

			selector: ".users__slider > .user__slide",
			slides: {
				perView: 1.125,
				origin: "center",
				spacing: -10,
			},
		},
		[MutationPlugin]
	);

	const scaleStyle = idx => {
		if (!details) return {};
		const progress = details.slides[idx];
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
		<div ref={sliderRef} className='keen-slider users__slider perspective-[1000px] h-full'>
			{userBlogs?.map((blog, index) => (
				<div key={index} className='keen-slider__slide user__slide'>
					<SliderSlide style={scaleStyle(index)} blog={blog} key={index} author={blog.author} />
				</div>
			))}
		</div>
	);
}
