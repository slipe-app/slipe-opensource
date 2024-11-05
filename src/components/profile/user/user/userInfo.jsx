import PixelAvatar from "../../../common/ui/pixelAvatar";
import { Image } from "@unpic/preact";
import cdn_url from "../../../../constants/cdn_url";

import "./userInfo.scss";

export default function ProfileUserInfo({ avatar, followers, pixels, username }) {
	return (
		<div className='profile-user-info'>
			<div className='profile-user-info__avatar-wrapper'>
				{avatar ? <Image width={128} height={128} className='avatar-wrapper__avatar' src={`${cdn_url}/avatars/${avatar}`} /> : <PixelAvatar size={108} username={username} pixels={pixels} />}
			</div>
			<div className='profile-user-info__followers-counter'>
				<p><span>{followers}</span> Followers</p>
			</div>
		</div>
	);
}
