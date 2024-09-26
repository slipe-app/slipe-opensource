import { useState, useEffect } from "preact/hooks";
import colors from "../../../constants/colors";

export default function AuthButton({ text, type, callBack, id }) {
	return (
		<button id={id} onClick={callBack} style={{ background: type === "secondary" ? colors.nonTransparentButtonBg : colors.blue, color: type === "secondary" ? colors.text : "" }} className={` ${type !== "secondary" ? "text-white" : ""} w-full origin-center p-4 rounded-3xl text-lg font-medium active:!scale-[0.98] active:opacity-85 duration-150`}>
			{text}
		</button>
	);
}
