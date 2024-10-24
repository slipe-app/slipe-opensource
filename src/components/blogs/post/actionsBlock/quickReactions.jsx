import { useTheme } from "../../../common/contexts/themeContext";
import { Image } from "@unpic/preact";
import Svg from "../../../common/ui/utils/svg";
import icons from "../../../../constants/icons";
import { animate } from "motion";
import { useRef, useState, useEffect } from "preact/hooks";

export default function QuickReactions({ reactionClicked, quickReactions = [], reactions, id }) {
	const { theme } = useTheme();
	const [isReactions, setIsReactions] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const reactionsRef = useRef(null);

	const animateReactionsBlock = state => {
		setIsReactions(state);
		animateExpandedReactions(false);
		animate(
			`#reactionsBlock-${id}`,
			{ width: isReactions ? "3.125rem" : "100%", padding: isReactions ? "0.1875rem" : "0.5rem", background: isReactions ? theme.semiTransparentBg : theme.grayBackground },
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
		animate(`#reactionsBlockButton-${id}`, { background: isReactions ? "transparent" : theme.buttonInactiveBg }, { easing: "ease-out", duration: 0.2 });
		quickReactions.map((reaction, index) => {
			animate(`#reactionsBlockReaction-${id}-${index}`, { opacity: isReactions ? 0 : 1, scale: isReactions ? 0.4 : 1 }, { easing: "ease-out", duration: 0.15 + index / 20 });
		});
		animate(`#reactionsBlockButton1-${id}`, { opacity: isReactions ? 0 : 1, scale: isReactions ? 0.4 : 1 }, { easing: "ease-out", duration: 0.2 });
	};

	const animateExpandedReactions = state => {
		setIsExpanded(state);
		animate(`#actionsBlock-${id}`, { padding: state ? "0rem" : "1rem" }, { easing: "ease-out", duration: 0.2 });

		animate(`#reactionsBlock-${id}`, { borderRadius: state ? "0rem" : "5rem" }, { easing: "ease-out", duration: 0.2 });
	};

	useEffect(() => {
		reactionsRef.current.addEventListener("touchstart", e => e.stopPropagation());

		return () => {
			reactionsRef.current.removeEventListener("touchstart", e => e.stopPropagation());
		};
	}, []);

	return (
		<div id={`reactionsBlock-${id}`} style={{ color: theme.white, background: theme.semiTransparentBg }} className='rounded-[5rem] p-[0.1875rem] gap-3 flex w-[3.125rem] min-w-[3.125rem]'>
			<button
				id={`reactionsBlockButton-${id}`}
				onClick={() => animateReactionsBlock(!isReactions)}
				style={{ color: theme.white }}
				className='rounded-full duration-200 ease-out relative flex justify-center items-center active:opacity-80 active:scale-[0.97] min-w-11 h-11'
			>
				<Svg id={`reactionsBlockButtonSvg1-${id}`} className='absolute opacity-0' size={22} style={{ color: theme.white }} icon={icons["x"]} />
				<Svg id={`reactionsBlockButtonSvg2-${id}`} size={30} style={{ color: theme.white }} icon={icons["smile"]} />
			</button>
			<div ref={reactionsRef} className='w-full overflow-scroll flex gap-4 items-center'>
				{quickReactions.map((reaction, index) => (
					<button onClick={() => reactionClicked(0, reaction)} id={`reactionsBlockReaction-${id}-${index}`} className='min-w-[2.125rem]'>
						<Image width={34} height={34} className='duration-200 ease-out active:opacity-80 active:scale-[0.97]' src={`emojis/new/0/${reaction}.png`} />
					</button>
				))}
			</div>
			<button
				id={`reactionsBlockButton1-${id}`}
				onClick={() => animateExpandedReactions(!isExpanded)}
				style={{ color: theme.white, background: theme.buttonInactiveBg }}
				className='rounded-full scale-[0.4] opacity-0 flex justify-center items-center ease-out active:opacity-80 min-w-[2.75rem] active:scale-[0.97] p-[0.4375rem]'
			>
				<Svg size={24} className='rotate-90' icon={icons["chevronLeft"]} />
			</button>
		</div>
	);
}
