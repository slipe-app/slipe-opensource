import { staticColors } from "../../../constants/colors";
import { useTheme } from "../contexts/themeContext";

export default function UIFollowButton({ state = false, isCompact = false, paddingX = "1.5rem", paddingY = "0.75rem", fontSize = "1rem", iconSize = 24, onClick }) {
	const { theme } = useTheme();
	return (
		<>
			<button
				style={{
					padding: `${paddingY} ${paddingX}`,
					borderColor: state ? theme.inActiveButtonNonTransBorder : "",
					fontSize: fontSize,
					background: state ? theme.inActiveButtonNonTransBg : staticColors.blue,
					color: staticColors.white,
				}}
				className='rounded-full border-[1.5px] duration-200 ease-out font-medium'
				onClick={onClick}
			>
				{state ? "Unfollow" : "Follow"}
			</button>
		</>
	);
}
