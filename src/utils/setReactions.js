import fetcher from "./fetcher";

export async function ReactionClicked(reactionCategory, reactionId, localReactions, localCurrentReaction, id, token, setCurrentReaction, setReactions) {
	let reactions = localReactions;
	const reactionName = `${reactionCategory}_${reactionId}`;
	const reactionIndex = reactions?.findIndex(reaction => reaction?.name === reactionName);
	const currentReactionIndex = reactions?.findIndex(reaction => reaction?.name === localCurrentReaction?.name);

	const updateReactionCount = (index, count) => {
		count === "1" ? delete reactions[index] : (reactions[index].count = String(Number(count) - 1));
	};

	if (localCurrentReaction?.name === reactionName) {
		updateReactionCount(reactionIndex, reactions[reactionIndex]?.count);
		setCurrentReaction();
	} else {
		if (localCurrentReaction) updateReactionCount(currentReactionIndex, reactions[currentReactionIndex]?.count);
		if (reactionIndex > -1) {
			reactions[reactionIndex].count = String(Number(reactions[reactionIndex].count) + 1);
			setCurrentReaction(reactions[reactionIndex]);
		} else {
			const newReaction = { name: reactionName, count: "1" };
			reactions.push(newReaction);
			setCurrentReaction(newReaction);
		}
	}

	setReactions(reactions.filter(Boolean));

	const formData = new FormData();
	formData.append("to_post", id);
	formData.append("name", reactionName);

	await fetcher("/reaction/add", "post", formData, { Authorization: "Bearer " + token });
}
