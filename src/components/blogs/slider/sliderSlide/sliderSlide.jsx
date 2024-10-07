import { Image } from "@unpic/preact";
import "keen-slider/keen-slider.min.css";
import SlideUserBlock from "./slideUserBlock";
import SlideActionsBlock from "./slideActionsBlock";
import cdn_url from "../../../../constants/cdn_url";
import { useEffect } from "preact/hooks";
import TimePassedFromDate from "../../../../utils/time/timePassedFromDate";

export default function SliderSlide({ style, key, author, blog }) {
	// 9.7A
	return (
			<div className='h-full relative flex flex-col justify-between rounded-[36px] overflow-hidden' style={style}>
				<Image width={1000} height={1000} src={cdn_url + "/posts/" + blog?.image} className='w-full -z-10 h-full object-cover  !aspect-auto absolute' alt={`Slide ${key}`} loading='lazy' />
				<SlideUserBlock name={author?.nickname ? author?.nickname : author?.username} pixels={author?.pixel_order} date={TimePassedFromDate(blog?.date)} avatar={author?.avatar} badge={author?.badge} />
				<SlideActionsBlock reactions={blog?.reactions} />
			</div>
	);
};
