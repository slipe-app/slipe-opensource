import colors from "../../../../constants/colors";
import { useState } from "preact/hooks";
import icons from "../../../../constants/icons";
import { useKeenSlider } from "keen-slider/react";
import { Image } from "@unpic/preact";
import "keen-slider/keen-slider.min.css";
import UserBadge from "../../../common/ui/userBadge";
import MutationPlugin from "../../../../utils/observerMutation";
import ActionsBlockReaction from "./actionsBlockReaction";

export default function ReactionsBlock({ reactions }) {
	const [isCommentsActive, setIsCommentsActive] = useState(false);
	const [isReactionsActive, setIsReactionsActive] = useState(false);

	const [reactionSliderRef] = useKeenSlider(
		{
			rubberband: false,
			loop: false,
			mode: "free",
			slides: {
				spacing: 10,
				perView: "auto",
			},
		},
		[MutationPlugin]
	);
	return (
		<div className='w-full p-[1.125rem] pr-0 gap-4 flex'>
			<button onClick={() => setIsReactionsActive(!isReactionsActive)} style={{ backgroundColor: isReactionsActive ? "#fff" : colors.semiTransparentBg }} className='rounded-full duration-150 p-[0.625rem]'>
				<svg width='28' height='28' style={{ color: isReactionsActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["smile"]} />
				</svg>
			</button>
			<button onClick={() => setIsCommentsActive(!isCommentsActive)} style={{ backgroundColor: isCommentsActive ? "#fff" : colors.semiTransparentBg }} className='rounded-full duration-150 p-[0.625rem]'>
				<svg width='28' height='28' style={{ color: isCommentsActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["message"]} />
				</svg>
			</button>
			<div ref={reactionSliderRef} className='keen-slider w-full flex'>
				{reactions?.map((reaction, index) => (
					<div key={index} className='keen-slider__slide !min-w-fit !w-fit !max-w-fit'>
						<ActionsBlockReaction emoji={reaction.name} count={reaction.count} />
					</div>
				))}
			</div>
		</div>
	);
}
