import bannerColors from "../../../constants/bannerColors";
import shufflePixels from "../../../utils/ui/generateBanner";

import "./banner.scss";
import "../../common/ui/pixelAvatar.scss";
import { Image } from "@unpic/preact";

export default function ProfileBanner({ pixels, image, username }) {
	return (
		<div className='profile-banner'>
			{image ? (
				<Image width={1000} height={1000} className='profile-banner__image' />
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
