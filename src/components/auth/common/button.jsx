import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";

export default function AuthButton({ text, type, callBack, id }) {
	const [currentText, setCurrentText] = useState(text);
	useEffect(() => {
		animate(`#text-${id}`, { opacity: 0 }, { duration: 0.15, easing: "ease-out" });

		setTimeout(() => {
			setCurrentText(text);
			animate(`#text-${id}`, { opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}, 200);
	}, [text]);
	return (
		<button id={id} onClick={callBack} style={{ background: type === "secondary" ? colors.nonTransparentButtonBg : colors.blue, color: type === "secondary" ? colors.text : "" }} className={` ${type !== "secondary" ? "text-white" : ""} w-full origin-center p-4 rounded-3xl text-lg font-medium active:!scale-[0.98]  active:opacity-85 duration-150`}>
			<span id={`text-${id}`}>{currentText}</span>
		</button>
	);
}
