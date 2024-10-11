import { useEffect, useState } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";
import AuthInput from "../../common/input";
import { animate } from "motion";
import validateUsername from "../../../../utils/auth/usernameChecks";

export default function AuthSignUpUsername({ username, setUsername }) {
	const [isFocused, setIsFocused] = useState(false);
	const [error, setError] = useState([]);

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

	useEffect(() => {
		if (username) {
				setError(validateUsername(username));
		}
	}, [username]);

	return (
		<>
			<div style={{ background: colors.nonTransparentButtonBg }} className='w-32 rounded-full justify-center items-center flex h-32'>
				<svg width='96' height='96' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["symbol"]} />
				</svg>
			</div>
			<span style={{ color: colors.text }} className='text-3xl font-semibold'>
				How we can call you?
			</span>
			<AuthInput isFocused={data => setIsFocused(data)} value={username} onChange={data => setUsername(data.target.value)} placeholder='Your username here'>
				<span id='usernameCount' style={{ color: colors.text }} className='p-[1rem] opacity-0 pl-0 text-lg'>
					{username.length}/24
				</span>
			</AuthInput>
			<span style={{ color: colors.red }} className='w-full text-center text-lg h-0'>
				{error[1]}
			</span>
		</>
	);
}
