import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";

export default function AuthStageTemplate({ icon, text, primaryText }) {
	return (
		<>
			<svg width='180' height='180' style={{ color: colors.text }} className='animate-[fadeIn_0.2s_ease]' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
				<path fill-rule='evenodd' clip-rule='evenodd' d={icon} />
			</svg>
			<div className='w-full flex flex-col gap-1'>
				<span id='text' style={{ color: colors.text }} className='font-semibold text-[2.15rem] text-center'>
					{text}
				</span>
				<p style={{ color: colors.textPrimaryTransparent }} className='text-[1.15rem] text-center'>
					{primaryText}
				</p>
			</div>
		</>
	);
}
