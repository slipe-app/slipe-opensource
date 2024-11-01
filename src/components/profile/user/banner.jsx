import bannerColors from "../../../constants/bannerColors";
import shufflePixels from "../../../utils/ui/generateBanner";
import { Image } from "@unpic/preact";
import cdn_url from "../../../constants/cdn_url";

import "./banner.scss";
import "../../common/ui/pixelAvatar.scss";

export default function ProfileBanner({ pixels, banner, username }) {
	return (
		<div className='profile-banner'>
			{banner ? (
				<Image width={1000} src={`${cdn_url}/banners/${banner}`} height={1000} className='profile-banner__image' />
			) : (
				<div className='profile-banner__pixels'>
					{shufflePixels(pixels)?.map(pixel => (
						<span style={{ background: `${bannerColors[username[0]]}` }} className={`pixel-avatar__pixel-${pixel}`} />
					))}
				</div>
			)}
		</div>
	);
}
