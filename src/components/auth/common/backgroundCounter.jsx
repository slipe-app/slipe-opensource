import colors from "../../../constants/colors";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MutationPlugin from "../../../utils/observerMutation";
import { useEffect, useState } from "preact/hooks";
import icons from "../../../constants/icons";

export default function AuthBackgroundCounter({ stagesArray = [0], selectedColor = colors.text, currentStage = 0, screenType = "main" }) {
	const [details, setDetails] = useState(null);

	const [sliderRef, slider] = useKeenSlider(
		{
			detailsChanged(s) {
				setDetails(s.track.details.slides);
			},
			vertical: true,
			drag: false,
			slides: {
				perView: 2.5,
				origin: "center",
			},
		},
		[MutationPlugin]
	);

	useEffect(() => {
		slider.current?.moveToIdx(currentStage);
	}, [currentStage]);

	const opacityStyle = idx => {
		if (!details) return {};
		const progress = details[idx];
		const opacity_size = 3;
		const opacity = 1 - (opacity_size - opacity_size * progress?.portion);
		return {
			opacity,
		};
	};

	return (
		<div ref={sliderRef} className='keen-slider first opacity-50 !w-full !flex-nowrap !flex-col !h-full'>
			{stagesArray?.map((stage, idx) => (
				<div style={opacityStyle(idx)} id={idx} key={idx} className='keen-slider__slide user__slides items-center flex justify-center'>
					<svg width='200' height='200' style={{ color: colors.text }} className='animate-[fadeIn_0.2s_ease]' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons[`pixeled_${stage}`]} />
					</svg>
				</div>
			))}
		</div>
	);
}
