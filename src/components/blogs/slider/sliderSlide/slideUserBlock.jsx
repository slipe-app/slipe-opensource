import { Image } from "@unpic/preact";
import colors from "../../../../constants/colors";
import { useState } from "preact/hooks";
import icons from "../../../../constants/icons";
import UserBadge from "../../../common/ui/userBadge";
import PixelAvatar from "../../../common/ui/pixelAvatar";
import cdn_url from "../../../../constants/cdn_url";

export default function SlideUserBlock({ name, avatar, badge, date, pixels }) {
	const [isDropdownActive, setIsDropdownActive] = useState(false);
	return (
		<div className='w-full p-[1.125rem] gap-4 flex bg-gradient-to-b from-black/25 to-transparent'>
			<div className='w-full flex gap-[0.625rem] items-center overflow-hidden'>
				{avatar ? <Image width={48} height={48} className='rounded-full' src={cdn_url + "/avatars/" + avatar} /> : <PixelAvatar size={48} gradient="hsl(0deg 100% 62.35%)" textSize='1.25rem' pixels={pixels} />}

				<div className='flex flex-col w-full overflow-hidden'>
					<div className='w-full flex gap-1'>
						<div className='grow whitespace-nowrap overflow-hidden max-w-fit text-ellipsis font-medium text-white'>{name}</div>
						<UserBadge badgeSize='1.5rem' />
					</div>
					<span className='text-sm text-white/75'>
						{date} {badge}
					</span>
				</div>
			</div>
			<div className='relative'>
				<button onClick={() => setIsDropdownActive(!isDropdownActive)} style={{ backgroundColor: isDropdownActive ? "#fff" : colors.semiTransparentBg }} className='rounded-full duration-150 p-[0.625rem]'>
					<svg width='28' height='28' style={{ color: isDropdownActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["menu"]} />
					</svg>
				</button>
			</div>
		</div>
	);
}
