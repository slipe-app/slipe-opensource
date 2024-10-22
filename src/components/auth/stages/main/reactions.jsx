import { Image } from "@unpic/preact";
import { useTheme } from "../../../common/contexts/themeContext";

export default function AuthMainReactions() {
	const { theme } = useTheme();
	return (
		<>
			<div className='w-full flex gap-5'>
				<div className='flex flex-col'>
					<Image src='emojis/new/0/0.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<Image src='emojis/new/0/1.png' className='!w-full aspect-square' />
					<Image src='emojis/new/0/2.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
				</div>
				<div className='flex flex-col'>
					<Image src='emojis/new/0/3.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<Image src='emojis/new/0/4.png' className='!w-full aspect-square' />
					<Image src='emojis/new/0/5.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
				</div>
				<div className='flex flex-col'>
					<Image src='emojis/new/0/6.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<Image src='emojis/new/0/7.png' className='!w-full aspect-square' />
					<Image src='emojis/new/0/8.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
				</div>
			</div>
			<div className=' flex flex-col gap-2'>
				<span style={{ color: theme.text }} className='text-center text-3xl font-semibold'>
					Reactions, not likes
				</span>
				<span style={{ color: theme.textPrimaryTransparent }} className='text-center text-lg'>
					Now instead of likes, you can better express your feelings about the blog
				</span>
			</div>
		</>
	);
}
