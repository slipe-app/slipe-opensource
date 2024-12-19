import { Button } from "@/components/ui/button";
import cdn from "@/constants/cdn";
import PixelAvatar from "../pixels-avatar";

export default function User({ user }) {
	return (
		<div className='w-full flex flex-col -mb-16 -translate-y-16 gap-1 px-5'>
			<div className='flex justify-between items-end'>
				{user?.avatar ? (
					<img
						className='rounded-full w-32 aspect-square duration-200 ease-out border-[6px] border-background object-cover'
						src={cdn + "/avatars/" + user?.avatar}
					/>					
				) : (
					<PixelAvatar size={36} username={user?.username} pixels={user?.pixel_order} />
				)}
				<div className='h-1/2 flex items-center'>
					<p className='text-lg font-medium'>
						<span>{user?.subscribers}</span> <span className='text-foreground/50'>Followers</span>
					</p>
				</div>
			</div>
			<div className='flex items-center gap-5'>
				<div className='flex flex-col w-full overflow-hidden'>
					<div className='whitespace-nowrap overflow-hidden max-w-fit text-2xl text-ellipsis font-medium text-white'>{user?.nickname ? user?.nickname : user?.username}</div>{" "}
					<span className='text-foreground/50 overflow-hidden w-full overflow-ellipsis whitespace-nowrap text-lg'>@{user?.username}</span>
				</div>
				<Button className='rounded-full px-7 min-h-[3.25rem] text-lg h-[3.25rem]'>Edit bio</Button>
			</div>
		</div>
	);
}
