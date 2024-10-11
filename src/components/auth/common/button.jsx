import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";
import icons from "../../../constants/icons";

export default function AuthButton({ text, type, callBack, id, isActive = true, stagesType }) {
	const [currentText, setCurrentText] = useState(text);
	useEffect(() => {
		animate(`#text-${id}`, { opacity: 0 }, { duration: 0.15, easing: "ease-out" });
		setTimeout(() => {
			setCurrentText(text);
			// 6.66
			animate(`#text-${id}`, { opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}, 150);
	}, [text]);

	useEffect(() => {
		if (type === "secondary" && stagesType !== "main") {
			animate(`#${id}`, isActive ? { marginLeft: "0", opacity: 1 } : { marginLeft: "-5rem", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
		}
	}, [isActive]);
	return (
		<>
			{type === "secondary" ? (
				<button
					id={id}
					onClick={callBack}
					style={{ background: colors.nonTransparentButtonBg, color: colors.text }}
					className='origin-center p-4 rounded-3xl opacity-0 -ml-[5rem] text-lg font-medium active:!scale-[0.99] active:opacity-90 duration-150'
				>
					<span id={`text-${id}`}>
						<svg width='32' height='32' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["chevronLeft"]} />
						</svg>
					</span>
				</button>
			) : (
				<button
					onClick={callBack}
					style={{ background: colors.blue, pointerEvents: isActive ? 'auto' : 'none' }}
					className={`text-white w-full origin-center p-[1.125rem] rounded-3xl text-lg font-medium active:!scale-[0.99] ${isActive ? "active:opacity-90" : "opacity-85"} duration-150`}
				>
					<span id={`text-${id}`}>{currentText}</span>
				</button>
			)}
		</>
	);
}
