import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";

export default function AuthStageTemplate({ icon, text, primaryText }) {
	// useEffect(() => {
	// 	for (let i = 0; i < text?.split("").length; i++) {
	// 		setTimeout(() => {
	// 			animate(`#animatedSymbol-${i}`, { transform: "translateY(8px)", opacity: 0, filter: "blur(8px)" }, { duration: 0.35, easing: "ease-in-out" });
	// 		}, i * 20);
	// 	}
	// 	setTimeout(() => {
	// 		for (let i = 0; i < text?.split("").length; i++) {
	// 			setTimeout(() => {
	// 				animate(`#animatedSymbol-${i}`, { transform: "translateY(0px)", opacity: 1, filter: "blur(0px)" }, { duration: 0.35, easing: "ease-in-out" });
	// 			}, i * 20);
	// 		}
	// 	}, 350);
	// }, [text]);
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
