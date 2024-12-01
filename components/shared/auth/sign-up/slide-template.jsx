export default function SlideTemplate({ title = "", img = "" }) {
	return (
		<>
			<div className='flex flex-col gap-4 items-center'>
				<img src={img} alt={title} className='w-40 h-40' />
				<span className='text-3xl text-foreground font-semibold'>{title}</span>
			</div>
		</>
	);
}
