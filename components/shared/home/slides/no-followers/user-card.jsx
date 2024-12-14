import { Button } from "@/components/ui/button";

export default function UserCard({ user }) {
	return (
		<div className='rounded-3xl relative w-full aspect-square overflow-hidden'>
            <img src="./static/test-assets/blur.png" className="w-full absolute -z-10 h-full object-cover"/>
			<div className='w-full h-full items-center flex flex-col justify-center bg-black/50 gap-[0.375rem]'>
				<img src='./static/test-assets/hus.png' className='aspect-square w-16 max-[384px]:w-14 min-[420px]:w-[4.5rem] rounded-full object-cover' />
				<span className='w-full text-center overflow-ellipsis font-medium text-white'>Husband test</span>
				<Button size='sm' className='rounded-full'>
					Follow
				</Button>
			</div>
		</div>
	);
}
