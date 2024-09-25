import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";

export default function AuthButton({ text, type }) {
	return (
		<button style={{ background: type === "secondary" ? colors.nonTransparentButtonBg : colors.blue }} className='text-white w-full origin-center p-[0.875rem] rounded-[1.375rem] text-lg font-medium active:scale-[0.98] active:opacity-90 duration-200'>
			{text}
		</button>
	);
}
