import { Image } from "@unpic/preact";
import colors from "../../../../constants/colors";
import { useState } from "preact/hooks";
import icons from "../../../../constants/icons";
import UserBadge from "../../../common/ui/userBadge";

export default function SlideUserBlock({name, avatar, badge, date}) {
	const [isDropdownActive, setIsDropdownActive] = useState(false);
	return (
		<div className='w-full p-[1.125rem] gap-4 flex bg-gradient-to-b from-black/25 to-transparent'>
			<div className='w-full flex gap-[0.625rem] items-center overflow-hidden'>
				<Image width={46} height={46} className='rounded-full' src={avatar} />
				<div className='flex flex-col w-full overflow-hidden'>
					<div className='w-full flex gap-1'>
						<div className='grow whitespace-nowrap overflow-hidden max-w-fit text-ellipsis font-medium text-white'>{name}</div>
						<UserBadge badgeSize='1.5rem' />
					</div>
					<span className='text-sm text-white/75'>{date} {badge}</span>
				</div>
			</div>
			<div className='relative'>
				<button onClick={() => setIsDropdownActive(!isDropdownActive)} style={{ backgroundColor: isDropdownActive ? "#fff" : colors.semiTransparentBackground }} className='rounded-full duration-150 p-2'>
					<svg width='30' height='30' style={{ color: isDropdownActive ? "#000" : "#fff" }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["menu"]} />
					</svg>
				</button>
			</div>
		</div>
	);
};
