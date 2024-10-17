import { useState } from "preact/hooks";
import UIFollowButton from "../../common/ui/followButton";
import UIUserBlock from "../../common/ui/userBlock";

export default function PostUserBlock({ user, date }) {
    const [state, setState] = useState(false);
	return (
		<div className='w-full p-4 flex gap-4 '>
			{/* <UIUserBlock badge={user?.badge} desc={date} name={user?.nickname ? user.nickname : user.username} avatar={user?.avatar} pixels={user?.pixel_order} /> */}
			<UIFollowButton state={state} onClick={() => setState(!state)} />
		</div>
	);
}
