import { useState } from "preact/hooks";
import UIFollowButton from "../../common/ui/followButton";
import UIUserBlock from "../../common/ui/userBlock";
import TimePassedFromDate from "../../../utils/time/timePassedFromDate";

export default function PostUserBlock({ user, date }) {
    const [state, setState] = useState(false);
	return (
		<div className='w-[calc(300%-2.5rem)] p-4 flex gap-3 bg-gradient-to-b from-black/25 to-transparent'>
			<UIUserBlock badge={user?.badge} desc={TimePassedFromDate(date)} name={user?.nickname ? user.nickname : user.username} avatar={user?.avatar} pixels={user?.pixel_order} />
			<UIFollowButton state={state} onClick={() => setState(!state)} />
		</div>
	);
}
