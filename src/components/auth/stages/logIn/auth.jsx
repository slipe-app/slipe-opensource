import { useEffect, useState } from "preact/hooks";
import { useTheme } from "../../../common/contexts/themeContext";
import icons from "../../../../constants/icons";
import Svg from "../../../common/ui/utils/svg";
import AuthInput from "../../common/input";
import { animate } from "motion";

export default function AuthLogInMain({ password, error, setPassword, setStagesType }) {
	const [isPassword, setIsPassword] = useState(true); // 8.68 20 72 69
	const { theme } = useTheme();

	useEffect(() => {
		animate("#passwordEye", isPassword ? { transform: "translateY(0px) rotateX(0deg)", opacity: 1 } : { transform: "translateY(-16px) rotateX(-32deg)", opacity: 0 }, {
			duration: 0.15,
			easing: "ease-out",
		});
		animate("#passwordSlashedEye", isPassword ? { transform: "translateY(16px) rotateX(32deg)", opacity: 0 } : { transform: "translateY(0px) rotateX(0deg)", opacity: 1 }, {
			duration: 0.15,
			easing: "ease-out",
		});
	}, [isPassword]);

	return (
		<>
			<div style={{ background: theme.nonTransparentButtonBg }} className='w-32 rounded-full justify-center items-center flex h-32'>
				<Svg size={96} style={{ color: theme.text }} icon={icons["user1"]} />
			</div>
			<span style={{ color: theme.text }} className='text-3xl font-semibold'>
				Welcome back!
			</span>
			<AuthInput maxLength={48} type={isPassword ? "password" : "text"} value={password} onChange={data => setPassword(data.target.value)} placeholder='Password here'>
				<div onClick={() => setIsPassword(!isPassword)} className='h-full aspect-square justify-center items-center relative flex'>
					<Svg id='passwordEye' size={40} style={{ color: theme.textPrimaryTransparent }} icon={icons["eye"]} />
					<Svg id='passwordSlashedEye' className='absolute opacity-0' size={40} style={{ color: theme.textPrimaryTransparent }} icon={icons["slashedEye"]} />
				</div>
			</AuthInput>

			<p className='text-lg' style={{ color: theme.textPrimaryTransparent }}>
				Don't have an account?{" "}
				<span className='font-medium' onClick={() => setStagesType("signUp")} style={{ color: theme.text }}>
					Sign up
				</span>
			</p>

			{error ? (
				<span style={{ color: theme.red }} className='w-full text-center text-lg h-0'>
					{error[1]}
				</span>
			) : null}
		</>
	);
}
