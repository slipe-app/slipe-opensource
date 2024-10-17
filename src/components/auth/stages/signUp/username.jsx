import { useEffect, useState } from "preact/hooks";
import { useTheme } from "../../../common/contexts/themeContext";
import icons from "../../../../constants/icons";
import AuthInput from "../../common/input";
import { animate } from "motion";

export default function AuthSignUpUsername({ username, error, setUsername }) {
	const [isFocused, setIsFocused] = useState(false);
	const { theme } = useTheme();
	// const [error, setError] = useState([]);

	useEffect(() => {
		animate(
			"#usernameCount",
			isFocused ? { transform: "translateY(0px) rotateX(0deg)", opacity: 0.25, display: "block" } : { transform: "translateY(-10px) rotateX(-20deg)", opacity: 0, display: "none" },
			{
				duration: 0.15,
				easing: "ease-out",
			}
		);
	}, [isFocused]);

	// useEffect(() => {
	// 	if (username) {
	// 			setError(validateUsername(username));
	// 	}
	// }, [username]);

	return (
		<>
			<div style={{ background: theme.nonTransparentButtonBg }} className='w-32 rounded-full justify-center items-center flex h-32'>
				<svg width='96' height='96' style={{ color: theme.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["symbol"]} />
				</svg>
			</div>
			<span style={{ color: theme.text }} className='text-3xl font-semibold'>
				How we can call you?
			</span>
			<AuthInput isFocused={data => setIsFocused(data)} value={username} onChange={data => setUsername(data.target.value)} placeholder='Your username here'>
				<span id='usernameCount' style={{ color: theme.text }} className='p-[1rem] opacity-0 pl-0 text-lg'>
					{username.length}/24
				</span>
			</AuthInput>

			{error ? (
				<span style={{ color: theme.red }} className='w-full text-center text-lg h-0'>
					{error[1]}
				</span>
			) : null}
		</>
	);
}
