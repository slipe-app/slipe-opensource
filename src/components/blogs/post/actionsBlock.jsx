import icons from "../../../constants/icons";
import { useRef, useEffect } from "preact/hooks";
import { useTheme } from "../../common/contexts/themeContext";
import Svg from "../../common/ui/utils/svg";
import { Image } from "@unpic/preact";

import "swiper/css/free-mode";
import "swiper/css";

export default function PostActionsBlock({ reactions }) {
	const reactionsRef = useRef(null);
	const { theme } = useTheme();
	useEffect(() => {
		const reactionsElement = reactionsRef.current;

		reactionsElement.addEventListener("touchstart", e => e.stopPropagation());

		return () => {
			reactionsElement.removeEventListener("touchstart", e => e.stopPropagation());
		};
	}, []);
	return (
		<div className='w-[calc(200%-2.5rem)] p-4 pr-0 flex gap-4 bg-gradient-to-t from-black/35 to-transparent'>
			<button
				onClick={() => console.log("reactions modal")}
				style={{ color: theme.white, background: theme.semiTransparentBg }}
				className='rounded-full duration-200 ease-out active:opacity-80 active:scale-[0.97] p-[0.625rem]'
			>
				<Svg size={30} icon={icons["smile"]} />
			</button>
			<button
				onClick={() => console.log("comments modal")}
				style={{ color: theme.white, background: theme.semiTransparentBg }}
				className='rounded-full duration-200 ease-out active:scale-[0.97] active:opacity-80 p-[0.625rem]'
			>
				<Svg size={30} icon={icons["message"]} />
			</button>
			<div ref={reactionsRef} className='w-full overflow-scroll pr-2 flex gap-4'>
				{reactions.map(reaction => (
					<button
						onClick={() => console.log(`reaction: ${reaction} clicked! `)}
						style={{ color: theme.white, background: theme.semiTransparentBg }}
						className='rounded-full flex min-w-fit items-center font-medium gap-2 duration-200 ease-out active:scale-[0.97] active:opacity-80 px-5 p-[0.625rem]'
					>
						<Image width={30} height={30} src='emojis/faceTongue.png' />
						{reaction.count}
					</button>
				))}
			</div>
		</div>
	);
}
