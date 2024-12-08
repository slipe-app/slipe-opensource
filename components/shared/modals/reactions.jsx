import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import { useEffect, useState } from "react";
import { useStorage } from "@/hooks/contexts/session";

export default function ReactionsModal({ children, currentReaction, onReactionClicked, open, setOpen }) {
	const [activeCategory, setCategory] = useState("recently");
	const [reactions, setReactions] = useState([]);
	const { token, store } = useStorage([]);
	const categories = [
		{ icon: icons["clock"], id: "recently", maxReactions: 5, label: "Recently used" },
		{ icon: icons["smile"], id: "0", maxReactions: 61, label: "Emojis and people" },
		{ icon: icons["gesture"], id: "1", maxReactions: 40, label: "Gestures" },
		{ icon: icons["leaf"], id: "2", maxReactions: 31, label: "Nature and animals" },
		{ icon: icons["pizza"], id: "3", maxReactions: 25, label: "Food and drinks" },
		{ icon: icons["dice"], id: "4", maxReactions: 45, label: "Objects and items" },
		{ icon: icons["map"], id: "5", maxReactions: 25, label: "Travel and vehicles" },
		{ icon: icons["symbol"], id: "6", maxReactions: 37, label: "Symbols and signs" },
	];

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

	useEffect(() => {
		console.log(123, currentReaction);
	}, [currentReaction])

	return (
		<Drawer activeSnapPoint={0.7} open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0'>
				<DrawerHeader className='p-5'>
					<DrawerTitle className='font-medium'>Reactions</DrawerTitle>
				</DrawerHeader>
				<ul className='w-full h-[26rem] px-5 flex flex-col gap-5 overflow-y-scroll'>
					{categories.map((category, index) => (
						<li key={index} className='flex flex-col gap-2'>
							{category.id == "recently" ? (
								<div className='flex justify-between'>
									<span className='text-lg text-foreground/50'>{category.label}</span>
									<span onClick={() => clearRecently()} className='text-lg active:opacity-90 font-medium duration-200 ease-out text-red-foreground'>
										Clear
									</span>
								</div>
							) : (
								<span className='text-lg text-foreground/50'>{category.label}</span>
							)}
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
											<img className='w-full aspect-square' src={`emojis/new/${reaction.slice(0, 1)}/${reaction.slice(2)}.png`} />
										</Button>
									))}
								</div>
							) : (
								<div className='grid grid-cols-5'>
									{Array.from({ length: category.maxReactions }, (_, i) => i).map(index => (
										<Button
											onClick={() => reactionClicked(`${category.id}/${index}`)}
											data-active={`${category.id}_${index}` === currentReaction?.name}
											key={index}
											size='iconLg'
											className='w-full h-auto p-3 hover:bg-foreground/[0.12] max-[380px]:p-2 bg-transparent data-[active=true]:bg-foreground/[0.12] min-h-0 min-w-0 aspect-square'
										>
											<img className='w-full aspect-square' src={`emojis/new/${category.id}/${index}.png`} />
										</Button>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
				<DrawerFooter className='p-5 flex-row overflow-x-scroll flex gap-0'>
					{categories.map((category, index) => (
						<Button
							data-active={category.id == activeCategory}
							onClick={() => setCategory(category.id)}
							size='icon'
							className='rounded-full data-[active=true]:bg-primary data-[active=true]:opacity-100 opacity-50 bg-transparent h-[3.25rem] min-h-[3.25rem] px-[1.375rem] min-w-fit w-fit'
							key={index}
						>
							<Svg icon={category.icon} className='!w-8 !h-8' />
						</Button>
					))}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
