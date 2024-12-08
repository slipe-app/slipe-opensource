import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import { useEffect, useState } from "react";
import { animate } from "motion";
import { useStorage } from "@/hooks/contexts/session";

export default function QuickReactions({ reactionClicked, setIsReactions, isReactions = false, currentReaction }) {
	const [reactions, setReactions] = useState([]);
	const {token, store} = useStorage();

	const getReactions = async () => {
		const value = await store.get("reactions");
		setReactions(value?.reverse() || ["emojis/new/0/0", "emojis/new/0/1", "emojis/new/0/2", "emojis/new/0/3", "emojis/new/0/4"].reverse());
	};

	useEffect(() => {
		getReactions();
		reactions.map((reaction, index) => {
			animate(`#quick-reaction-${index}`, isReactions ? { scale: 1, opacity: 1 } : { scale: 0.25, opacity: 0 }, { easing: "ease-out", duration: 0.2 + index * 0.05 });
		});
	}, [isReactions]);

	return (
		<div data-isexpanded={isReactions} className="duration-200 ease-out overflow-hidden flex w-0 opacity-0 data-[isexpanded=true]:w-full data-[isexpanded=true]:opacity-100">
			<button onClick={() => setIsReactions(false)} className="min-w-[2.625rem] bg-white/[0.12] flex justify-center items-center text-white rounded-full duration-200 ease-out h-[2.625rem]">
				<Svg className="!w-[1.375rem] !h-[1.375rem]" icon={icons["x"]} />
			</button>
			<div className='flex w-full mx-1 justify-between'>
				{reactions.map((reaction, index) => (
					<button
                    data-isactive={currentReaction?.name[0] == "0" && currentReaction?.name.slice(2, currentReaction?.name.length) == reaction}
                    id={`quick-reaction-${index}`}
						onClick={() => {
							reactionClicked(reaction[0], reaction.slice(2));
							setIsReactions(false);
						}}
						className='flex justify-center items-center w-full data-[isactive=false]:opacity-50'
					>
						<img className=" w-8 h-8" src={`emojis/new/${reaction.slice(0, 1)}/${reaction.slice(2)}.png`} />
					</button>
				))}
			</div>
		</div>
	);
}
