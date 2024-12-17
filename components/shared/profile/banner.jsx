import { ShufflePixels, PixelsColors } from "@/lib/utils";

export default function Banner({ user }) {
	return (
		<>
			<div className='relative w-full overflow-hidden aspect-[16/11] min-h-fit -z-10 rounded-b-[1.25rem]'>
				{user?.banner ? (
					<img loading='lazy' src={"./static/test-assets/mango.jpg"} className='w-full absolute -z-10 h-full object-cover' />
				) : (
					<div className='grid grid-cols-7 grid-rows-7 absolute -z-10 h-full w-full'>
						{ShufflePixels(user?.pixel_order)?.map((pixel, index) => (
							<span
								key={index}
								style={{ background: `${PixelsColors[user?.username[0]]}`, opacity: 0.25 * pixel }}
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
