import icons from "../../../../constants/icons";
import { useTheme } from "../../../common/contexts/themeContext";
import Svg from "../../../common/ui/utils/svg";
import QuickReactions from "./quickReactions";

export default function ActionsBlock({ reactions, id }) {
	const { theme } = useTheme();

	const reactionClicked = (reactionCategory, reactionId) => {
		console.log(reactionCategory, reactionId);
	};

	return (
		<div id={`actionsBlock-${id}`} className='w-[calc(200%-2.5rem)] rounded-b-[2rem] p-4 flex items-end gap-4 bg-gradient-to-t overflow-hidden from-black/25 to-transparent'>
			<QuickReactions quickReactions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} id={id} reactionClicked={(reactionCategory, reactionId) => reactionClicked(reactionCategory, reactionId)} />
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
