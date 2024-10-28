import icons from "../../../constants/icons";
import Svg from "./utils/svg";

import "./followButton.scss";

export default function UIFollowButton({ compact = false, subscribed = false, fixed = false, onClick, iconSize = 26, padding = 0.75 }) {
	return (
		<>
			<button
				style={{ padding: `${padding}rem ${padding * 2}rem` }}
				onClick={onClick}
				className={`follow_button${subscribed ? (fixed ? "--followed_fixed" : "--followed") : "--un_followed"}`}
			>
				{subscribed ? <>{compact ? <Svg size={iconSize} icon={icons["x"]} /> : <>Followed</>}</> : <>{compact ? <Svg size={iconSize} icon={icons["checkmark"]} /> : <>Follow</>}</>}
			</button>
		</>
	);
}
