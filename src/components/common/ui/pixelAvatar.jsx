import bannerColors from "../../../constants/bannerColors";

import './pixelAvatar.scss'

export default function PixelAvatar({ size, pixels, username = "" }) {
	return (
		<div style={{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size }} className='pixel_avatar'>
			{pixels?.map(pixel => (
				<span style={{ background: `${bannerColors[username[0]]}` }} className={`pixel-avatar__pixel-${pixel}`} />
			))}
		</div>
	);
}