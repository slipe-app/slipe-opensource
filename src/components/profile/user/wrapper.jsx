import ProfileBanner from "./banner";

import "./wrapper.scss";

export default function ProfileUserWrapper({ user }) {
	// Передавай в banner только banner там уже есть все ссылки пупс
	return (
		<>
			<ProfileBanner banner={user} username='q' pixels={[0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 2, 3, 3, 3, 0, 2]} />
			<div className='profile-wrapper'></div>
		</>
	);
}
