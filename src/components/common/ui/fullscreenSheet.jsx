import { createPortal, useState } from "preact/compat";
import { animate } from "motion";
import { useEffect } from "preact/compat";
import { useTheme } from "../contexts/themeContext";

import "./fullScreenSheet.scss";

export default function UIFullScreenSheet({ children, backdropBlur = false, isOpen = false, onClick, id = "1", zIndex = 20 }) {
	const [isRender, setIsRender] = useState(false);
	const { theme } = useTheme();
	useEffect(() => {
		if (isOpen) {
			setIsRender(isOpen);
			setTimeout(() => {
				animate(`#UIFullScreenSheet-${id}`, { opacity: 1 }, { easing: "cubic-bezier(0.65, 0, 0.35, 1)", duration: 0.2 });
			}, 10);
		} else {
			if (isRender) {
				animate(`#UIFullScreenSheet-${id}`, { opacity: 0 }, { easing: "cubic-bezier(0.65, 0, 0.35, 1)", duration: 0.2 }).finished.then(() => {
					setIsRender(isOpen);
				});
			}
		}
	}, [isOpen]);
	return (
		<>
			{isRender &&
				createPortal(
					<div style={{ zIndex: zIndex }} id={`UIFullScreenSheet-${id}`} onClick={onClick} className={`full_screen_sheet${backdropBlur ? "--blured" : "--default"}`}>
						{children}
					</div>,
					document.body
				)}
		</>
	);
}
