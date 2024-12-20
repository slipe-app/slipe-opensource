import UserBlock from "./user-block";
import ActionsBlock from "./actions-block";
import cdn from "@/constants/cdn";

export default function Post({ user, setUser, blog }) {
	return (
		<div
			className='flex bg-[#161616] w-[calc(200%-2.5rem)] absolute rounded-[2rem] justify-between h-full overflow-hidden items-center flex-col'
		>
			<UserBlock user={user} setUser={setUser} date={blog?.date} />
			<img loading='lazy' src={cdn + `/posts/${blog?.image}`} className='w-full object-contain h-full absolute top-0 block' />
			<ActionsBlock id={blog?.id} currentReaction={blog.reaction} reactions={blog.reactions} />
		</div>
	);
}
