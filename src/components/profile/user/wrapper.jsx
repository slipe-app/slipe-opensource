import ProfileBanner from "./banner";
import ProfileUser from "./user/user";

import "./wrapper.scss";

export default function ProfileUserWrapper({ user }) {
	// Передавай в banner только banner там уже есть все ссылки пупс
	return (
		<div className="profile-wrapper">
			<ProfileBanner banner={user} username='dikiy' pixels={[0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 2, 3, 3, 3, 0, 2]} />
			<div className='profile-content-wrapper'>
				<ProfileUser/>
			</div>
		</div>
	);
}
