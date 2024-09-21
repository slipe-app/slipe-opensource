import { Image } from "@unpic/preact";
import "keen-slider/keen-slider.min.css";
import SlideUserBlock from "./slideUserBlock/slideUserBlock";
import SlideActionsBlock from "./slideActionsBlock/slideActionsBlock";

const SliderSlide = ({ style, key, image }) => {
	return (
		<div key={key} className='keen-slider__slide'>
			<div className='h-full relative flex flex-col justify-between rounded-[36px] overflow-hidden' style={style}>
				<Image width={1000} height={1000} src={image} className='w-full -z-10 h-full object-cover absolute' alt={`Slide ${key}`} loading='lazy' />
				<SlideUserBlock />
				<SlideActionsBlock/>
			</div>
		</div>
	);
};

export default SliderSlide;
