import { Image } from "@unpic/preact";
import PixelAvatar from "./utils/pixelAvatar";
import cdn_url from "../../../constants/cdn_url";

export default function UIUserBlock({ avatar, badge, name, desc, pixels}) {
	return (
		<div className='w-full flex gap-[0.625rem] items-center overflow-hidden'>
			{avatar ? (
				<Image width={48} height={48} className='rounded-full' src={cdn_url + "/avatars/" + avatar} />
			) : (
				<PixelAvatar size={48} pixels={pixels} />
			)}
			<div className='flex flex-col w-full overflow-hidden'>
				<div className='w-full flex gap-1'>
					<div className='grow whitespace-nowrap overflow-hidden max-w-fit text-ellipsis font-medium text-white'>{name}</div>
				</div>
				<span className='text-sm text-white/75'>
					{desc} {badge}
				</span>
			</div>
		</div>
	);
}
