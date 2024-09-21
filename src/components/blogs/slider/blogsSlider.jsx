import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import UsersBlogsSlider from "./userBlogsSlider";

const SliderWrapper = () => {
	const [slider3Ref] = useKeenSlider({
		selector: ".first > .keen-slider__slide",
		vertical: true,
	});

	return (
		<div ref={slider3Ref} className='keen-slider first !w-full !flex-nowrap !flex-col !h-full'>
			<div className='keen-slider__slide py-28'>
				<UsersBlogsSlider />
			</div>
			<div className='keen-slider__slide py-28'>
				<UsersBlogsSlider />
			</div>
		</div>
	);
};

export default SliderWrapper;
