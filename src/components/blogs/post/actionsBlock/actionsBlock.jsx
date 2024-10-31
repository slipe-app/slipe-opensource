import icons from "../../../../constants/icons";
import { useTheme } from "../../../common/contexts/themeContext";
import Svg from "../../../common/ui/utils/svg";
import QuickReactions from "./quickReactions";
import { Image } from "@unpic/preact";
import { ReactionClicked } from "../../../../utils/setReactions";
import { useStorage } from "../../../common/contexts/sessionContext";
import { useEffect, useState, useRef } from "preact/hooks";

import "./actionsBlock.scss";

export default function ActionsBlock({ reactions, currentReaction, id }) {
	const { token, store } = useStorage();
	const [isReactions, setIsReactions] = useState(false);
	const [localCurrentReaction, setCurrentReaction] = useState(currentReaction);
	const [localReactions, setReactions] = useState(reactions);
	const reactionsRef = useRef(null);

	useEffect(() => {
		const reactionsElement = reactionsRef?.current;

		reactionsElement.addEventListener("touchstart", e => e.stopPropagation());
		return () => {
			reactionsElement.removeEventListener("touchstart", e => e.stopPropagation());
		};
	}, []);

	return (
		<div className='actions_block'>
			<div className={`action-block__action-button${isReactions ? "--expanded" : "--closed"}`}>
				<QuickReactions
					isReactions={isReactions}
					setIsReactions={setIsReactions}
					quickReactions={[0, 1, 2, 3, 4]}
					reactionClicked={(reactionCategory, reactionId) => ReactionClicked(reactionCategory, reactionId, localReactions, localCurrentReaction, id, token, setCurrentReaction, setReactions)}
				/>
				<button onClick={() => setIsReactions(!isReactions)} className={`action-button__button${isReactions ? "--active" : ""}`}>
					<Svg size={30} icon={icons["smile"]} />
				</button>
			</div>

			<button className={`action-block__action-button--comments${isReactions ? "--hidden" : ""}`}>
				<Svg size={30} icon={icons["message"]} />
			</button>
			<div ref={reactionsRef} className={`actions-block__reactions${isReactions ? "--hidden" : ""}`}>
				{reactions.map(reaction => (
					<button className='reactions__reaction'>
						<Image
							width={30}
							height={30}
							src={reaction.name?.startsWith("emoji_") ? `emojis/old/${reaction.name}` : `emojis/new/${reaction.name[0]}/${reaction.name.slice(2, reaction.name.length)}.png`}
						/>
						{reaction.count}
					</button>
				))}
			</div>
		</div>
	);
}
