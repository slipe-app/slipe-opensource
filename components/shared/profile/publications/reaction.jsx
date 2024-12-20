export default function Reaction() {
	return (
		<div className='rounded-[1.25rem] relative w-full aspect-square overflow-hidden'>
			<img loading='lazy' src={"./static/test-assets/mango.jpg"} className='w-full absolute -z-10 h-full object-cover' />

			<div className='w-full h-full items-center flex flex-col justify-center p-6 bg-black/50'>
				<img loading='lazy' src={"./emojis/new/0/1.png"} className='w-full h-full' />
			</div>
		</div>
	);
}
