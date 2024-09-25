import colors from "../../../../constants/colors";
import { Image } from "@unpic/preact";

export default function ActionsBlockReaction ({count, emoji}) {
	return (
			<button style={{ backgroundColor: colors.semiTransparentBg }} className='rounded-full flex items-center gap-2 text-sm text-white font-medium duration-150 px-[1.15rem] p-[0.625rem]'>
				<Image src='emojis/emoji_230xw.png' width={64} height={64} style={{ width: "1.625rem", height: "1.625rem" }} />
				{count}
			</button>
	);
};
