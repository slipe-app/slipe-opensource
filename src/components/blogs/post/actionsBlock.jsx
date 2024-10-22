import { useState } from "preact/hooks";
import icons from "../../../constants/icons";
import { useTheme } from "../../common/contexts/themeContext";
import Svg from "../../common/ui/utils/svg";
import { animate } from "motion";
import { Image } from "@unpic/preact";

export default function PostActionsBlock({ reactions, id }) {
	const [isReactions, setIsReactions] = useState(false);
	const { theme } = useTheme();

	const fastReactions = [
		"emojis/new/0/0.png",
		"emojis/new/0/1.png",
		"emojis/new/0/2.png",
		"emojis/new/0/3.png",
		"emojis/new/0/4.png",
		"emojis/new/0/5.png",
		"emojis/new/0/6.png",
		"emojis/new/0/7.png",
		"emojis/new/0/8.png",
		"emojis/new/0/9.png",
	];

	const animateReactionsBlock = state => {
		setIsReactions(state);
		animate(
			`#reactionsBlock-${id}`,
			{ width: isReactions ? "3.125rem" : "100%", padding: isReactions ? "0.1875rem" : "0.5rem", backdropFilter: isReactions ? "blur(0px)" : "blur(64px)" },
			{ easing: "ease-out", duration: 0.2 }
		);
		animate(`#commentsButton-${id}`, { marginRight: isReactions ? "0rem" : "-7rem", opacity: isReactions ? 1 : 0 }, { easing: "ease-out", duration: 0.2 });
		animate(
			`#reactionsBlockButtonSvg2-${id}`,
			{ scale: isReactions ? 1 : 0.4, opacity: isReactions ? 1 : 0 },
			{
				duration: 0.2,
				easing: "ease-out",
			}
		);
		animate(
			`#reactionsBlockButtonSvg1-${id}`,
			{ scale: isReactions ? 0.4 : 1, opacity: isReactions ? 0 : 1 },
			{
				duration: 0.2,
				easing: "ease-out",
			}
		);
		fastReactions.map((reaction, index) => {
			animate(`#reactionsBlockReaction-${id}-${index}`, { opacity: isReactions ? 0 : 1, scale: isReactions ? 0.4 : 1 }, { easing: "ease-out", duration: 0.15 + index / 20 });
		});
		animate(`#reactionsBlockButton-${id}`, { opacity: isReactions ? 0 : 1, scale: isReactions ? 0.4 : 1 }, { easing: "ease-out", duration: 0.2 });
	};

	return (
		<div className='w-[calc(200%-2.5rem)] p-4 flex gap-4 bg-gradient-to-t overflow-hidden from-black/25 to-transparent'>
			<div id={`reactionsBlock-${id}`} style={{ color: theme.white, background: theme.semiTransparentBg }} className='rounded-full p-[0.1875rem] gap-3 flex w-[3.125rem] min-w-[3.125rem]'>
				<button
					onClick={() => animateReactionsBlock(!isReactions)}
					style={{ color: theme.white, background: theme.buttonInactiveBg }}
					className='rounded-full duration-200 ease-out relative flex justify-center items-center active:opacity-80 active:scale-[0.97] min-w-11 h-11'
				>
					<Svg id={`reactionsBlockButtonSvg1-${id}`} className='absolute opacity-0' size={22} style={{ color: theme.white }} icon={icons["x"]} />
					<Svg id={`reactionsBlockButtonSvg2-${id}`} size={30} style={{ color: theme.white }} icon={icons["smile"]} />
				</button>
				<div className='w-full overflow-hidden flex gap-4 items-center'>
					{fastReactions.map((reaction, index) => (
						<button id={`reactionsBlockReaction-${id}-${index}`} className='min-w-[2.125rem]'>
							<Image width={34} height={34} className='duration-200 ease-out active:opacity-80 active:scale-[0.97]' src={reaction} />
						</button>
					))}
				</div>
				<button
					id={`reactionsBlockButton-${id}`}
					onClick={() => animateReactionsBlock(!isReactions)}
					style={{ color: theme.white, background: theme.buttonInactiveBg }}
					className='rounded-full scale-[0.4] opacity-0 flex justify-center items-center ease-out active:opacity-80 min-w-[2.75rem] active:scale-[0.97] p-[0.4375rem]'
				>
					<Svg size={24} className="rotate-90" icon={icons["chevronLeft"]} />
				</button>
			</div>
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
