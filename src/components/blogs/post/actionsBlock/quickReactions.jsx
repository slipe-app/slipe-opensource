import { Image } from "@unpic/preact";
import Svg from "../../../common/ui/utils/svg";
import icons from "../../../../constants/icons";
import { useEffect } from "preact/hooks";

import "./quickReactions.scss";
import { animate } from "motion";

export default function QuickReactions({ reactionClicked, quickReactions = [], setIsReactions, isReactions = false, currentReaction }) {
	useEffect(() => {
		quickReactions.map(index => {
			animate(`.quick-reaction-${index}`, isReactions ? { scale: 1, opacity: 1 } : { scale: 0.25, opacity: 0 }, { easing: "ease-out", duration: 0.2 + index * 0.05 });
		});
	}, [isReactions]);

	return (
		<div className={`quick-reactions-wrapper${isReactions ? "--expanded" : "--closed"}`}>
			<button onClick={() => setIsReactions(false)} className='action-button__button--active'>
				<Svg size={24} icon={icons["x"]} />
			</button>
			<div className='quick-reactions-list'>
				{quickReactions.map((reaction, index) => (
					<button
						onClick={() => {
							reactionClicked(0, reaction);
							setIsReactions(false);
						}}
						className={`quick-reactions-list__reaction${
							currentReaction?.name[0] == "0" && currentReaction?.name.slice(2, currentReaction?.name.length) == reaction ? "--disabled" : ""
						} quick-reaction-${index}`}
					>
						<Image width={34} height={34} src={`emojis/new/0/${reaction}.png`} />
					</button>
				))}
			</div>
		</div>
	);
}
