import { createPortal, useState } from "preact/compat";
import { animate } from "motion";
import { useEffect } from "preact/compat";
import { useTheme } from "../contexts/themeContext";

export default function UIFullScreenSheet({ children, isBackdropBlur = false, isOpen = false, onClick, id = "1", zIndex = 20 }) {
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
					<div
						style={{ background: isBackdropBlur ? theme.semiTransparentBg : theme.background, backdropFilter: isBackdropBlur ? "blur(12px)" : "", zIndex: zIndex }}
						id={`UIFullScreenSheet-${id}`}
						onClick={onClick}
						className='w-screen absolute opacity-0 top-0 left-0 h-screen'
					>
						{children}
					</div>,
					document.body
				)}
		</>
	);
}
