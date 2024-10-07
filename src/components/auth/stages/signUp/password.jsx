import { useEffect, useState } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";
import AuthInput from "../../common/input";
import { animate } from "motion";

export default function AuthSignUpPassword({ password, setPassword }) {
	const [isPassword, setIsPassword] = useState(true); // 8.68 20 72 69

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
			<div style={{ background: colors.nonTransparentButtonBg }} className='w-32 rounded-full justify-center items-center flex h-32'>
				<svg width='96' height='96' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["key"]} />
				</svg>
			</div>
			<span style={{ color: colors.text }} className='text-3xl font-semibold'>
				Your password here
			</span>
			<AuthInput maxLength={48} type={isPassword ? "password" : "text"} value={password} onChange={data => setPassword(data.target.value)} placeholder='Password here'>
				<div onClick={() => setIsPassword(!isPassword)} className='h-full aspect-square justify-center items-center relative flex'>
					<svg id='passwordEye' width='40' height='40' style={{ color: colors.textPrimaryTransparent }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["eye"]} />
					</svg>
					<svg
						className='absolute opacity-0'
						id='passwordSlashedEye'
						width='40'
						height='40'
						style={{ color: colors.textPrimaryTransparent }}
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["slashedEye"]} />
					</svg>
				</div>
			</AuthInput>
		</>
	);
}
