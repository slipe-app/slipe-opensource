import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import CommentBlock from "./comment-block";
import Svg from "@/components/ui/icons/svg";
import { Button } from "@/components/ui/button";
import icons from "@/components/ui/icons/icons";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { useStorage } from "@/hooks/contexts/session";
import api from "@/constants/api";
import cdn from "@/constants/cdn";

export default function CommentsModal({ children, postId, open, setOpen }) {
	const [inputFocus, setInputFocus] = useState(false);
	const [page, setPage] = useState(1);
	const [commentText, setCommentText] = useState("");
	const [comments, setComments] = useState([]);
	const [commentsCount, setCommentsCount] = useState(0);
	const [isButtonLoading, setIsButtonLoading] = useState(false);
	const { token, storage } = useStorage();

	const swrKey = open ? `${api.v1}/comment/get?post_id=${postId}&page=${page}` : null;

	const { data: commentsRequest, error, isLoading } = useSWR(swrKey, async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));
	const { data: user, userError, isUserLoading } = useSWR(api.v1 + "/account/info/get", async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

	function adjustHeight(element) {
		element.style.height = '48px';
		element.style.height = `${element.scrollHeight}px`;
	}

	async function sendComment () {
		setIsButtonLoading(true)

		const formData = new FormData();
		formData.append('text', commentText);
		formData.append('post_id', postId);

		const result = await fetcher(api.v1 + `/comment/publish`, "post", formData, { "Authorization": "Bearer " + token });

		if (result?.success) {
			setComments([{
				id: 0,
				text: commentText,
				likes: 0,
				liked: false,
				author: user?.success[0]
			}, ...comments]);
			setCommentsCount(commentsCount + 1);
			setCommentText("");
		} else console.log(result?.error); //error

		setIsButtonLoading(false);
	}

	useEffect(() => {
		setComments(commentsRequest?.success);
		setCommentsCount(Number(commentsRequest?.count))
	}, [commentsRequest]);

	return (
		<Drawer activeSnapPoint={0.7} open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0'>
				<DrawerHeader data-shadowed={inputFocus} className='p-5 duration-200 ease-out data-[shadowed=true]:opacity-40'>
					<DrawerTitle className='font-medium'>{commentsCount ? commentsCount : 0} comments</DrawerTitle>
				</DrawerHeader>
				<ul data-shadowed={inputFocus} className='w-full h-[31.5rem] duration-200 ease-out data-[shadowed=true]:opacity-40 px-5 relative pb-[5.5rem] flex flex-col gap-5 overflow-y-scroll'>
					{isLoading && <p>Loading...</p>}
					{error && <p>Error loading comments</p>}
					{!isLoading && !error && comments ? comments?.map(comment => (
						<CommentBlock id={comment.id} user={comment.author} content={comment.text} likes={comment.likes} liked={comment.liked} date={comment.date} />
					)) : null}
				</ul>
				<DrawerFooter id='categories-scroller' className='p-5 w-full flex-row fixed items-end bottom-0 bg-modal z-10 flex gap-4'>
					{user?.success ? (
						<img className='rounded-full min-w-12 object-cover bg-center w-12 h-12' src={`${cdn}/avatars/${user?.success[0]?.avatar}`} />
					) : (
						error ? (
							<PixelAvatar size={36} username={user?.success[0]?.username} pixels={user?.success[0]?.pixel_order} />
						) : null
					)}
					<Textarea onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} maxLength={200} onInput={element => setCommentText(element.target.value)} value={commentText} onChange={element => adjustHeight(element.target)} className='bg-foreground/[0.08] h-12 max-h-32 resize-none rounded-3xl text-sm p-[0.875rem]' placeholder='Type something' />
					<Button disabled={isButtonLoading} size='icon' className="rounded-full min-h-12 h-12 w-12 min-w-12" onClick={sendComment}>
						<Svg className='!w-7 !h-7' icon={icons["paperPlane"]} />
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
