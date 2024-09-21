import { useState } from "preact/hooks";
import { useKeenSlider } from "keen-slider/react";
import SliderSlide from "./sliderSlide/sliderSlide";

const images = ["/postsExamples/banana.jpg", "/postsExamples/popKybi.jpeg", "/postsExamples/s&m.png", "/postsExamples/skibidi.jpg"];

const UsersBlogsSlider = () => {
	const [details, setDetails] = useState(null);
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 1.125,
			origin: "center",
			spacing: -10,
		},
		detailsChanged(s) {
			setDetails(s.track.details);
		},
	});

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
		<div ref={sliderRef} className='keen-slider perspective-[1000px] h-full'>
			{images.map((src, idx) => (
				<SliderSlide style={scaleStyle(idx)} key={idx} image={src} />
			))}
		</div>
	);
};

export default UsersBlogsSlider;
