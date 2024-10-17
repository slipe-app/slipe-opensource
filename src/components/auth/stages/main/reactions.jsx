import { useTheme } from "../../../common/contexts/themeContext";

export default function AuthMainReactions() {
	const { theme } = useTheme();
	return (
		<>
			<div className='w-full flex gap-5'>
				<div className='flex flex-col'>
					<img src='emojis/moneyMouth.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<img src='emojis/sobFace.png' className='!w-full aspect-square' />
					<img src='emojis/vomitFace.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
				</div>
				<div className='flex flex-col'>
					<img src='emojis/kissingFace.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<img src='emojis/faceTongue.png' className='!w-full aspect-square' />
					<img src='emojis/faceGlasses.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
				</div>
				<div className='flex flex-col'>
					<img src='emojis/faceClasp.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
					<img src='emojis/smileFace.png' className='!w-full aspect-square' />
					<img src='emojis/cryingFace.png' className='!w-full scale-[0.65] opacity-50 aspect-square' />
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
