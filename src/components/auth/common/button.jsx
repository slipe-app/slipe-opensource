import { useState, useEffect } from "preact/hooks";
import { useTheme } from "../../common/contexts/themeContext";
import { animate } from "motion";
import icons from "../../../constants/icons";
import Svg from "../../common/ui/utils/svg";

export default function AuthButton({ text, type, callBack, id, isActive = true, stagesType }) {
	const { theme } = useTheme();
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
					style={{ background: theme.nonTransparentButtonBg, color: theme.text }}
					className='origin-center p-4 rounded-3xl opacity-0 -ml-[5rem] text-lg font-medium active:!scale-[0.99] active:opacity-90 duration-150'
				>
					<span id={`text-${id}`}>
						<Svg size={32} style={{ color: theme.text }} icon={icons["chevronLeft"]} />
					</span>
				</button>
			) : (
				<button
					onClick={callBack}
					style={{ background: theme.blue, pointerEvents: isActive ? "auto" : "none" }}
					className={`text-white w-full origin-center p-[1.125rem] rounded-3xl text-lg font-medium active:!scale-[0.99] ${isActive ? "active:opacity-90" : "opacity-85"} duration-150`}
				>
					<span id={`text-${id}`}>{currentText}</span>
				</button>
			)}
		</>
	);
}
