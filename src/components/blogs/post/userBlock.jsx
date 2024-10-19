import { useEffect, useState } from "preact/hooks";
import UIFollowButton from "../../common/ui/followButton";
import UIUserBlock from "../../common/ui/userBlock";
import TimePassedFromDate from "../../../utils/time/timePassedFromDate";
import fetcher from "../../../utils/fetcher";
import { useStorage } from "../../common/contexts/sessionContext";

export default function PostUserBlock({ user, setUser, date }) {
	const [localUser, setLocalUser] = useState(user);
	const [state, setState] = useState(localUser?.subscribed);
	const { token, store } = useStorage();

	async function subscribe () {
		if (state) setState(false);
		else setState(true);

		const followRequest = await fetcher("/account/subscribe", "post", JSON.stringify({
			user_id: user.id
		}), { 'Content-Type': 'application/json', 'Authorization': "Bearer " + token });

		if (followRequest?.error) {
			if (state) setState(true);
			else setState(false);
		}
	}
	
	useEffect(() => setUser({ ...user, subscribed: state }), [state]);

	useEffect(() => {
		setLocalUser(user)
		setState(user?.subscribed)
	}, [user]);

	return (
		<div className='w-[calc(200%-2.5rem)] p-4 flex gap-3 bg-gradient-to-b from-black/35 to-transparent'>
			<UIUserBlock badge={localUser?.badge} desc={TimePassedFromDate(date)} name={localUser?.nickname ? localUser.nickname : localUser.username} avatar={localUser?.avatar} pixels={localUser?.pixel_order} />
			<UIFollowButton state={state} onClick={subscribe} />
		</div>
	);
}
