import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import PixelAvatar from "../../pixels-avatar";
import cdn from "@/constants/cdn";
import { TimePassedFromDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useStorage } from "@/hooks/contexts/session";
import { fetcher } from "@/lib/utils";
import api from "@/constants/api";

export default function CommentBlock({ id, user, content, likes, liked, date, mutate }) {
	const [localLikes, setLikes] = useState();
	const [localLiked, setLiked] = useState();
	const { token, storage } = useStorage();

	async function likeComment() {
		if (localLiked) {
			setLikes(localLikes - 1);
			setLiked(false);
		} else {
			setLikes(localLikes + 1);
			setLiked(true);
		}

		const formData = new FormData();
		formData.append("comment_id", id);
		await fetcher(api.v1 + `/comment/like`, "post", formData, { Authorization: "Bearer " + token });
		mutate()
	}

	useEffect(() => {
		setLikes(Number(likes));
		setLiked(liked);
	}, [likes, liked]);

	return (
		<>
			<div className='w-full flex gap-3 items-center'>
				<div className='w-full flex gap-3 duration-200 ease-out items-center overflow-hidden'>
					{user?.avatar ? (
						<img className='rounded-full min-w-12 object-cover bg-center w-12 h-12' src={`${cdn}/avatars/${user?.avatar}`} />
					) : (
						<PixelAvatar size={48} username={user?.username} pixels={user?.pixel_order} />
					)}
					<div className='flex flex-col w-full overflow-hidden'>
						<div className='w-full flex gap-1'>
							<div className='whitespace-nowrap overflow-hidden max-w-fit text-ellipsis font-medium text-foreground'>
								{user?.nickname ? user?.nickname : user?.username}
							</div>
						</div>
						<span className='text-sm text-foreground/50'>{TimePassedFromDate(date)}</span>
					</div>
				</div>
				<Button
					data-liked={localLiked}
					className='rounded-full data-[liked=true]:bg-red-foreground data-[liked=true]:text-white text-foreground hover:text-white hover:bg-red-foreground bg-foreground/[0.08] px-4 min-h-11 h-11 text-sm gap-2'
					onClick={likeComment}
				>
					<Svg className='!w-6 !h-6' icon={icons["heart"]} />
					<span>{localLikes}</span>
				</Button>
			</div>
			<p className='pl-[3.75rem] break-words'>{content}</p>
		</>
	);
}
