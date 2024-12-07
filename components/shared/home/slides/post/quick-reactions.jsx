import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import { useEffect } from "react";
import { animate } from "motion";

export default function QuickReactions({ reactionClicked, quickReactions = [], setIsReactions, isReactions = false, currentReaction }) {

	useEffect(() => {
		quickReactions.map(index => {
			animate(`#quick-reaction-${index}`, isReactions ? { scale: 1, opacity: 1 } : { scale: 0.25, opacity: 0 }, { easing: "ease-out", duration: 0.2 + index * 0.05 });
		});
	}, [isReactions]);
	return (
		<div data-isexpanded={isReactions} className="duration-200 ease-out overflow-hidden flex w-0 opacity-0 data-[isexpanded=true]:w-full data-[isexpanded=true]:opacity-100">
			<button onClick={() => setIsReactions(false)} className="min-w-[2.625rem] bg-white/[0.12] flex justify-center items-center text-white rounded-full duration-200 ease-out h-[2.625rem]">
				<Svg className="!w-[1.375rem] !h-[1.375rem]" icon={icons["x"]} />
			</button>
			<div className='flex w-full mx-1 justify-between'>
				{quickReactions.map((reaction, index) => (
					<button
                    data-isactive={currentReaction?.name[0] == "0" && currentReaction?.name.slice(2, currentReaction?.name.length) == reaction}
                    id={`quick-reaction-${index}`}
						onClick={() => {
							reactionClicked(0, reaction);
							setIsReactions(false);
						}}
						className='flex justify-center items-center w-full data-[isactive=false]:opacity-50'
					>
						<img className=" w-8 h-8" src={`emojis/new/0/${reaction}.png`} />
					</button>
				))}
			</div>
		</div>
	);
}
