export default function animateReactionsBlock(state) {
	animate(
		`#reactionsBlock-${id}`,
		{ width: isReactions ? "3.125rem" : "100%", padding: isReactions ? "0.1875rem" : "0.5rem", background: isReactions ? theme.semiTransparentBg : theme.grayBackground },
		easing
	);

	animate(`#commentsButton-${id}`, { marginRight: isReactions ? "0rem" : "-7rem", opacity: isReactions ? 1 : 0 }, easing);

	animate(`#reactionsBlockButtonSvg2-${id}`, { scale: isReactions ? 1 : 0.4, opacity: isReactions ? 1 : 0 }, easing);

	animate(`#reactionsBlockButtonSvg1-${id}`, { scale: isReactions ? 0.4 : 1, opacity: isReactions ? 0 : 1 }, easing);

	animate(
		`#reactionsBlockButton-${id}`,
		{
			background: isReactions ? "transparent" : theme.buttonInactiveBg,
		},
		easing
	);

	quickReactions.map((reaction, index) => {
		animate(
			`#reactionsBlockReaction-${id}-${index}`,
			{
				opacity: isReactions ? 0 : 1,
				scale: isReactions ? 0.4 : 1,
			},
			{ easing: "ease-out", duration: 0.15 + index / 20 }
		);
	});

	animate(
		`#reactionsBlockButton1-${id}`,
		{
			opacity: isReactions ? 0 : 1,
			scale: isReactions ? 0.4 : 1,
		},
		easing
	);
}
