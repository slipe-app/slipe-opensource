import cdn from "@/constants/cdn";
import { ShufflePixels, PixelsColors } from "@/lib/utils";

export default function Banner({ banner, username, pixel_order }) {
	return (
		<>
			<div className='relative w-full overflow-hidden aspect-[16/11] min-h-fit -z-10 rounded-b-[1.25rem]'>
				{banner ? (
					<img loading='lazy' src={cdn + "/banners/" + banner} className='w-full absolute -z-10 h-full object-cover' />
				) : (
					<div className='grid grid-cols-7 grid-rows-1 absolute -z-10 h-full w-full'>
						{ShufflePixels(pixel_order)?.map((pixel, index) => (
							<span
								key={index}
								style={{ background: `${PixelsColors[username[0]]}`, opacity: 0.25 * pixel }}
								className='w-full aspect-square'
							/>
						))}
					</div>
				)}

				<span className='w-full h-full bg-gradient-to-b from-[#00000040] to-50% to-[#00000000] block' />
			</div>
		</>
	);
}
