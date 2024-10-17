import { staticColors } from "../../../constants/colors";

export default function UIFollowButton({ state = false, isCompact = false, paddingX = "1.5rem", paddingY = "0.75rem", fontSize = "1rem", iconSize = 24, onClick }) {
	return (
		<>
			<button
				style={{
					padding: `${paddingY} ${paddingX}`,
					borderColor: state ? staticColors.inActiveButtonNonTransBorder : staticColors.blue,
					fontSize: fontSize,
					background: state ? staticColors.inActiveButtonNonTransBg : staticColors.blue,
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