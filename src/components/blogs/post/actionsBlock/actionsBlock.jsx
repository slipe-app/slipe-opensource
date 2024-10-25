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
	const [ localCurrentReaction, setCurrentReaction ] = useState([]);
	const [ localReactions, setReactions ] = useState([]);


	//осторожно, говнокод
	//улучшу код как добавлю удаление текущей реакции при установке новой
	//а пока что можно наслаждаться размножением реакций
	async function reactionClicked (reactionCategory, reactionId) {
		const reactionName = `${reactionCategory}_${reactionId}`;
		const reaction = localReactions?.find(reaction => reaction?.name === reactionName);
		const reactionIndex = localReactions?.indexOf(reaction);

		const formData = new FormData();
		formData.append('to_post', id);
		formData.append('name', reactionName);

		if (localCurrentReaction?.name == reactionName) {
			if (reaction?.count === '1') {
				setReactions(localReactions.filter((reaction, index) => index !== reactionIndex));
			} else setReactions(oldValue => {
				oldValue[reactionIndex].count = String(Number(reaction.count) - 1);

				return oldValue;
			});
			
			setCurrentReaction();
		} else {
			if (reaction) setReactions(oldValue => {
				oldValue[reactionIndex].count = String(Number(reaction.count) + 1);
				setCurrentReaction(oldValue[reactionIndex]);

				return oldValue;
			}); else {
				const newCurrentReaction = {name: reactionName, count: '1'};
				setReactions([...localReactions, newCurrentReaction]);
				setCurrentReaction(newCurrentReaction);
			};
		}

		// const setReactionReq = await fetcher("/reaction/add", "post", formData, { 'Authorization': "Bearer " + token });
	};

	useEffect(() => {
		setCurrentReaction(currentReaction);
		setReactions(reactions);
	}, []);

	useEffect(() => console.log(localReactions, localCurrentReaction), [localReactions, localCurrentReaction])

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
