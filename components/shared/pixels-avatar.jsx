import { PixelsColors } from "@/lib/utils";

export default function PixelAvatar({ size, pixels, username = "", border }) {
	return (
		<div data-border={border} style={{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size }} className='overflow-hidden data-[border=true]:border-[6px] data-[border=true]:border-background animate-[fadeInOpacity_0.3s_ease-out] rounded-full grid bg-black grid-rows-4 grid-cols-4'>
			{pixels?.map((pixel, index) => (
				<span key={index} style={{ background: `${PixelsColors[username[0]]}`, opacity: 0.25 * pixel }} className='w-full aspect-square' />
			))}
		</div>
	);
}