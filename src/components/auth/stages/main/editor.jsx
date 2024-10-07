import { Image } from "@unpic/preact";
import { animate } from "motion";
import { useEffect } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";

export default function AuthMainEditor() {
	return (
		<>
			<div className='w-full grid grid-cols-3 grid-rows-2 gap-5'>
				<div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: colors.textPrimaryTransparent }}>
					<svg width='72' height='72' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["user"]} />
					</svg>
				</div>
                <div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: colors.text }}>
					<svg width='72' height='72' style={{ color: colors.background }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["smile"]} />
					</svg>
				</div>
                <div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: colors.textPrimaryTransparent }}>
					<svg width='72' height='72' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["paint"]} />
					</svg>
				</div>
                <div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: colors.text }}>
					<svg width='72' height='72' style={{ color: colors.background }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["image"]} />
					</svg>
				</div>
                <div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: colors.textPrimaryTransparent }}>
					<svg width='72' height='72' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["pencil"]} />
					</svg>
				</div>
                <div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: colors.text }}>
					<svg width='72' height='72' style={{ color: colors.background }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["text"]} />
					</svg>
				</div>
			</div>
			<div className=' flex flex-col gap-2'>
				<span style={{ color: colors.text }} className='text-center text-3xl font-semibold'>
					The editor of dream
				</span>
				<span style={{ color: colors.textPrimaryTransparent }} className='text-center text-lg'>
					Create truly breathtaking posts with our intuitively simple editor
				</span>
			</div>
		</>
	);
}
