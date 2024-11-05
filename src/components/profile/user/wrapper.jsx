import ProfileBanner from "./banner";
import ProfileUser from "./user/user";

import "./wrapper.scss";

export default function ProfileUserWrapper({ user }) {
	console.log(user?.pixel_order)
	return (
		<div className="profile-wrapper">
			<ProfileBanner banner={user?.banner} username='dikiy' pixels={user?.pixel_order ? user?.pixel_order : []} />
			<div className='profile-content-wrapper'>
				<ProfileUser avatar={user?.avatar} followers={user?.subscribers} name={user?.nickname} username={user?.username} pixels={user?.pixel_order}/>
			</div>
		</div>
	);
}
