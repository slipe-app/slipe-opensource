import { Image } from "@unpic/preact";
import colors from "../../../constants/colors";

export default function TabBarButton({ url, avatar, icon, currentUrl, color, label }) {
	return (
		<a href={url} style={{ opacity: currentUrl === url ? 1 : 0.25 }} className='w-full flex items-center duration-150 flex-col pb-4 pt-3'>
			{avatar ? (
				<>
					<div className='w-10 h-10 flex justify-center items-center'>
						<Image src={avatar} className='rounded-full' width={32} height={32} />
					</div>
					<span style={{ color: color }} className='text-[0.875rem] font-medium'>
						{label}
					</span>
				</>
			) : (
				<>
					<svg width='40' height='40' style={{ color: color }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icon} />
					</svg>
					<span style={{ color: color }} className='text-[0.875rem] font-medium'>
						{label}
					</span>
				</>
			)}
		</a>
	);
}
