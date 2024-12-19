import { Button } from "@/components/ui/button";
import { useStorage } from "@/hooks/contexts/session";
import { useState, useEffect } from "react";

export default function ReactionBlock({ category, currentReaction, onReactionClicked, setOpen }) {
	const [reactions, setReactions] = useState([]);
	const { token, store } = useStorage([]);

	const reactionClicked = async reaction => {
		await onReactionClicked(reaction.slice(0, 1), reaction.slice(2));
		await store.set("reactions", Array.from(new Set([...reactions, reaction])).slice(-5));
		getReactions();
		setOpen(false);
	};

	const clearRecently = async () => {
		setReactions(["0/0", "0/1", "0/2", "0/3", "0/4"]);
		await store.set("reactions", ["0/0", "0/1", "0/2", "0/3", "0/4"]);
	};

	const getReactions = async () => {
		const value = await store.get("reactions");
		setReactions(value || ["0/0", "0/1", "0/2", "0/3", "0/4"]);
	};

	useEffect(() => {
		getReactions();
	}, []);

	return (
		<li id={`category-item-${category.id}`} className='flex flex-col gap-2'>
			<div className='flex'>
				<span className='text-lg w-full text-foreground/50'>{category.label}</span>
				{category.id == "recently" ? (
					<span onClick={() => clearRecently()} className='text-lg active:opacity-90 font-medium duration-200 ease-out text-red-foreground'>
						Clear
					</span>
				) : null}
			</div>
			{category.id == "recently" ? (
				<div className='flex flex-row-reverse'>
					{reactions.map(reaction => (
						<Button
							onClick={() => reactionClicked(reaction)}
							data-active={`${reaction.slice(0, 1)}_${reaction.slice(2)}` === currentReaction?.name}
							key={reaction}
							size='iconLg'
							className='w-full animate-[fadeInOpacity_3s_ease-out] max-[380px]:p-2 h-auto p-3 hover:bg-foreground/[0.12] bg-transparent data-[active=true]:bg-foreground/[0.12] min-h-0 min-w-0 aspect-square'
						>
							<img loading="lazy" className='w-full aspect-square' src={`emojis/new/${reaction.slice(0, 1)}/${reaction.slice(2)}.png`} />
						</Button>
					))}
				</div>
			) : (
				<div className='grid grid-cols-5'>
					{Array.from({ length: category.maxReactions }, (_, i) => i).map(index => (
						<Button
							onClick={() => reactionClicked(`${category.id}/${index}`)}
							data-active={`${category.id}_${index}` === currentReaction?.name}
							key={category.label}
							size='iconLg'
							className='w-full h-auto p-3 hover:bg-foreground/[0.12] max-[380px]:p-2 bg-transparent data-[active=true]:bg-foreground/[0.12] min-h-0 min-w-0 aspect-square'
						>
							<img loading="lazy" className='w-full aspect-square' src={`emojis/new/${category.id}/${index}.png`} />
						</Button>
					))}
				</div>
			)}
		</li>
	);
}
