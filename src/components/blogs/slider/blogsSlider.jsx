import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MutationPlugin from "../../../utils/observerMutation";
import { useState } from "preact/hooks";
import UsersBlogsSlider from "./userBlogsSlider";

export default function SliderWrapper({ users, blogs }) {
	const [slider3Ref] = useKeenSlider(
		{
			selector: ".first > .user__slides",
			vertical: true,
		},
		[MutationPlugin]
	);

	return (
		<div ref={slider3Ref} className='keen-slider first !w-full !flex-nowrap !flex-col !h-full'>
			{users?.map((user, index) => (
				<div key={index} className='keen-slider__slide user__slides py-32'>
					<UsersBlogsSlider user={user} blogs={blogs} />
				</div>
			))}
		</div>
	);
};
