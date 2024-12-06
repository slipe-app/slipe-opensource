import { useEffect, useState } from "react";
import UIFollowButton from "../../common/ui/followButton";
import UIUserBlock from "../../common/ui/userBlock";
import { TimePassedFromDate } from "@/lib/utils";
import fetcher from "@/lib/fetcher";
import { useStorage } from "@/hooks/contexts/session";

import "./userBlock.scss";
import api from "@/constants/api";
import { Button } from "@/components/ui/button";

export default function UserBlock({ user, setUser, date }) {
	const [localUser, setLocalUser] = useState(user);
	const [state, setState] = useState(localUser?.subscribed);
	const { token, store } = useStorage();

	async function subscribe() {
		if (state) setState(false);
		else setState(true);

		const followRequest = await fetcher(
            api.v1 +
			"/account/subscribe",
			"post",
			JSON.stringify({
				user_id: user.id,
			}),
			{ "Content-Type": "application/json", Authorization: "Bearer " + token }
		);

		if (followRequest?.error) {
			if (state) setState(true);
			else setState(false);
		}
	}

	useEffect(() => setUser({ ...user, subscribed: state }), [state]);

	useEffect(() => {
		setLocalUser(user);
		setState(user?.subscribed);
	}, [user]);

	return (
		<div className='user_block'>
			<UIUserBlock 
				badge={localUser?.badge}
				desc={TimePassedFromDate(date)}
				name={localUser.nickname} username={localUser.username}
				avatar={localUser?.avatar} 
				pixels={localUser?.pixel_order} 
			/>
			<Button subscribed={state} onClick={subscribe} />
		</div>
	);
}
