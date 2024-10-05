import { useEffect, useState } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";
import { animate } from "motion";

export default function AuthSignUpChecks({ isCheck, checkDesc, idx }) {
	useEffect(() => {
		if (isCheck) {
			animate(`#check-${idx}`, { transform: "translateY(0px)", opacity: 1 }, { duration: 0.15, easing: "ease-out" });
			animate(`#check-${idx}-invalid`, { transform: "translateY(-18px) rotateX(-90deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
		} else {
			animate(`#check-${idx}`, { transform: "translateY(18px) rotateX(90deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
			animate(`#check-${idx}-invalid`, { transform: "translateY(0px)", opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}
	}, [isCheck]);
	return (
		<div className='w-full flex gap-2 items-center'>
			<div className='relative w-6 h-6'>
				<svg id={`check-${idx}-invalid`} className='duration-150 absolute' width='24' height='24' style={{ color: colors.red }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["x"]} />
				</svg>
				<svg id={`check-${idx}`} className='duration-150 opacity-0 absolute' width='24' height='24' style={{ color: colors.green }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["checkmark"]} />
				</svg>
			</div>

			<span className='duration-150 text-lg font-medium' style={{ color: isCheck ? colors.green : colors.red }}>
				{checkDesc}
			</span>
		</div>
	);
}
