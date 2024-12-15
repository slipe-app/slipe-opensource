import { Button } from "@/components/ui/button";
import PixelAvatar from "@/components/shared/pixels-avatar";
import cdn from "@/constants/cdn";
import follow from "@/lib/users/follow";
import { useStorage } from "@/hooks/contexts/session";
import { useState } from "react";

export default function UserCard({ user }) {
	const [isFollowed, setIsFollowed] = useState(false);
	const { token, store } = useStorage();

	async function followUser () {
		if (isFollowed) setIsFollowed(false);
		else setIsFollowed(true);

		const followRequest = await follow(user?.id, token);

		if (followRequest?.error) {
			if (isFollowed) setIsFollowed(true);
			else setIsFollowed(false);
		}
	}

	return (
		<div className='rounded-3xl relative w-full aspect-square overflow-hidden'>
            <img src="./static/test-assets/blur.png" className="w-full absolute -z-10 h-full object-cover"/>
			<div className='w-full h-full items-center flex flex-col justify-center bg-black/50 gap-[0.375rem]'>
				{user?.avatar ? (
					<img src={cdn + `/avatars/${user?.avatar}`} className='aspect-square w-16 max-[384px]:w-14 min-[420px]:w-[4.5rem] rounded-full object-cover' />
				) : (
					<PixelAvatar size={36} username={user?.username} pixels={user?.pixel_order} />
				)}
				
				<span className='w-full text-center overflow-ellipsis font-medium text-white'>{user?.nickname ? user?.nickname : user?.username}</span>
				<Button data-subscribed={isFollowed} className="data-[subscribed=true]:!bg-[#1F1F1F] rounded-full" onClick={followUser} size='sm'>
					{isFollowed ? "Followed" : "Follow"}
				</Button>
			</div>
		</div>
	);
}
