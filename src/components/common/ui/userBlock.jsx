import { Image } from "@unpic/preact";
import PixelAvatar from "./pixelAvatar";
import cdn_url from "../../../constants/cdn_url";

import "./userBlock.scss";

export default function UIUserBlock({ avatar, badge, name, username, desc, pixels }) {
	return (
		<div className='user_block'>
			{avatar ? <Image width={48} height={48} className='user-block__avatar' src={`${cdn_url}/avatars/${avatar}`} /> : <PixelAvatar size={48} username={username} pixels={pixels} />}
			<div className='user-block__user-info'>
				<div className='user-info__username-wrapper'>
					<div className='username-wrapper__username'>{name ? name : username}</div>
				</div>
				<span className='user-info__description'>
					{desc} {badge}
				</span>
			</div>
		</div>
	);
}
