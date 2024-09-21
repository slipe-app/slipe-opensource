import colors from "../../../../../constants/colors";
import { useState } from "preact/hooks";
import icons from "../../../../../constants/icons";
import { Image } from "@unpic/preact";
import UserBadge from "../../../../common/ui/userBadge";

const SlideActionsBlock = () => {
	const [isCommentsActive, setIsCommentsActive] = useState(false);
	const [isReactionsActive, setIsReactionsActive] = useState(false);
	return (
		<div className='w-full p-[1.125rem] pr-0 gap-4 flex'>
			<button onClick={() => setIsReactionsActive(!isReactionsActive)} style={{ backgroundColor: isReactionsActive ? "#fff" : colors.semiTransparentBackground }} className='rounded-full duration-150 p-2'>
				<svg width='30' height='30' style={{ color: isReactionsActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["smile"]} />
				</svg>
			</button>
			<button onClick={() => setIsCommentsActive(!isCommentsActive)} style={{ backgroundColor: isCommentsActive ? "#fff" : colors.semiTransparentBackground }} className='rounded-full duration-150 p-2'>
				<svg width='30' height='30' style={{ color: isCommentsActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["message"]} />
				</svg>
			</button>
			<div className='w-full overflow-scroll flex gap-4'>
				<button style={{ backgroundColor: colors.semiTransparentBackground }} className='rounded-full flex items-center gap-2 text-sm text-white font-medium duration-150 px-[1.15rem] p-[0.625rem]'>
					<Image src='emojis/emoji_230xw.png' width={64} height={64} style={{ width: "1.625rem", height: "1.625rem" }} />
					2.23K
				</button>
				<button style={{ backgroundColor: colors.semiTransparentBackground }} className='rounded-full flex items-center gap-2 text-sm text-white font-medium duration-150 px-[1.15rem] p-[0.625rem]'>
					<Image src='emojis/emoji_230xw.png' width={64} height={64} style={{ width: "1.625rem", height: "1.625rem" }} />
					2.23K
				</button>
			</div>
		</div>
	);
};

export default SlideActionsBlock;
