import { useEffect, useState } from "preact/hooks";
import { useKeenSlider } from "keen-slider/react";
import SliderSlide from "./sliderSlide/sliderSlide";
import cdn_url from "../../../constants/cdn_url";

const images = ["/postsExamples/banana.jpg", "/postsExamples/popKybi.jpeg", "/postsExamples/s&m.png", "/postsExamples/skibidi.jpg"];

export default function UsersBlogsSlider({ user, blogs }) {
	const [details, setDetails] = useState(null);
	const [sliderRef] = useKeenSlider({
		selector: ".users__slider > .user__slide",
		slides: {	
			perView: 1.125,
			origin: "center",
			spacing: -10,
		},
		detailsChanged(s) {
			setDetails(s.track.details);
		},
	});

	const userBlogs = blogs.filter(blog => blog?.author?.username === user);

	const scaleStyle = idx => {
		if (!details) return {};
		const { portion } = details.slides[idx];
		const scale_size = 0.14;
		const opacity_size = 0.6;
		const scale = 1 - (scale_size - scale_size * portion);
		const opacity = 1 - (opacity_size - opacity_size * portion);
		return {
			opacity,
			transform: `scale(${scale})`,
			WebkitTransform: `scale(${scale})`,
		};
	};

	return (
		<div ref={sliderRef} className='keen-slider users__slider perspective-[1000px] h-full'>
			{userBlogs.map((blog, idx) => (
				<SliderSlide style={scaleStyle(idx)} key={idx} blog={blog} author={blog.author} />
			))}
		</div>
	);
};
