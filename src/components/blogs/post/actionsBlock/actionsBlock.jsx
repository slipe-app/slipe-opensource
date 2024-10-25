import icons from "../../../../constants/icons";
import { useTheme } from "../../../common/contexts/themeContext";
import Svg from "../../../common/ui/utils/svg";
import QuickReactions from "./quickReactions";
import fetcher from "../../../../utils/fetcher";
import { useStorage } from "../../../common/contexts/sessionContext";
import { useEffect, useState } from "preact/hooks";

export default function ActionsBlock({ reactions, currentReaction, id }) {
	const { theme } = useTheme();
	const { token, store } = useStorage()
	const [localCurrentReaction, setCurrentReaction] = useState();
	const [localReactions, setReactions] = useState([]);


	// теперь код просто большой, если повезет, исправлю это
	async function reactionClicked(reactionCategory, reactionId) {
		let reactions = localReactions;
		const reactionName = `${reactionCategory}_${reactionId}`;
		const reaction = reactions?.find(reaction => reaction?.name === reactionName);
		const reactionIndex = reactions?.indexOf(reaction);

		if (localCurrentReaction?.name === reactionName) {
			if (reaction?.count === "1") {
				delete reactions[reactionIndex];
			} else {
				reactions[reactionIndex].count = String(Number(reaction?.count) - 1);
			}

			setCurrentReaction();
		} else {
			if (localCurrentReaction) {
				const currentReactionObject = reactions?.find(reaction => reaction?.name === localCurrentReaction?.name);
				const currentReactionIndex = reactions?.indexOf(currentReactionObject)

				if (currentReactionObject?.count === "1") {
					delete reactions[currentReactionIndex];
				} else {
					reactions[currentReactionIndex].count = String(Number(currentReactionObject?.count) - 1);
				}
			}

			if (reaction) {
				reactions[reactionIndex].count = String(Number(reaction.count) - 1);
				setCurrentReaction(reactions[reactionIndex]);
			} else {
				const newCurrentReaction = { name: reactionName, count: '1' };
				reactions.push(newCurrentReaction);
				setCurrentReaction(newCurrentReaction);
			}
		}

		setReactions(reactions.filter(Boolean))

		const formData = new FormData();
		formData.append('to_post', id);
		formData.append('name', reactionName);

		await fetcher("/reaction/add", "post", formData, { 'Authorization': "Bearer " + token });
	}

	useEffect(() => {
		setCurrentReaction(currentReaction);
		setReactions(reactions);
	}, []);

	return (
		<div id={`actionsBlock-${id}`} className='w-[calc(200%-2.5rem)] rounded-b-[2rem] p-4 flex items-end gap-4 bg-gradient-to-t overflow-hidden from-black/25 to-transparent'>
			<QuickReactions quickReactions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} id={id} reactionClicked={reactionClicked} />
			<button
				id={`commentsButton-${id}`}
				style={{ color: theme.white, background: theme.semiTransparentBg }}
				className='rounded-full duration-200 ease-out active:opacity-80 active:scale-[0.97] ml-0 p-[0.625rem]'
			>
				<Svg size={30} icon={icons["message"]} />
			</button>
		</div>
	);
}
