import bannerColors from '@/constants/pixels-colors';

export default function PixelAvatar({ size, pixels, username = "" }) {
	return (
		<div style={{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size }} className='overflow-hidden animate-[fadeInOpacity_0.3s_ease-out] rounded-full grid bg-black grid-rows-4 grid-cols-4'>
			{pixels?.map((pixel, index) => (
				<span key={index} style={{ background: `${bannerColors[username[0]]}`, opacity: 0.25 * pixel }} className='w-full aspect-square' />
			))}
		</div>
	);
}