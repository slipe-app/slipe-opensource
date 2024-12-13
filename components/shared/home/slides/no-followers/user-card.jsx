import { Button } from "@/components/ui/button";

export default function UserCard({ user }) {
	return (
		<div className='rounded-3xl relative h-[10.5rem] aspect-square overflow-hidden'>
            <img src="./static/test-assets/blur.png" className="w-full absolute -z-10 h-full object-cover bg-center"/>
			<div className='w-full h-full items-center flex flex-col justify-center bg-black/50 gap-[0.375rem]'>
				<img src='./static/test-assets/hus.png' className='h-16 w-16 rounded-full object-cover bg-center' />{" "}
				<span className='w-full text-center overflow-ellipsis font-medium text-foreground'>Husband test</span>
				<Button size='sm' className='rounded-full'>
					Follow
				</Button>
			</div>
		</div>
	);
}
