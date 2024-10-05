import icons from "../../../constants/icons";
import AuthStageTemplate from "../stages/stagesTemplate";
import readLocaleFile from "../../../utils/locales/read";
import AuthInput from "../common/input";
import { default as emailRegex } from "../../../constants/regex/email";
import { useEffect, useState } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";
import AuthSignUpChecks from "./components/checks";
import validatePassword from "../../../utils/auth/passwordChecks";

export default function AuthSignUpPassword({ setScreenType }) {
	const locales = readLocaleFile("en");
	const [password, setPassword] = useState("");
	const [checks, setChecks] = useState({
		lengthValid: false,
		hasLetters: false,
		hasSpecialChar: false,
	});
	const [isPassword, setIsPassword] = useState(true);
	useEffect(() => {
		if (isPassword) {
			animate("#password-invisible", { transform: "translateY(0px)", opacity: 1 }, { duration: 0.15, easing: "ease-out" });
			animate("#password-visible", { transform: "translateY(-18px) rotateX(-90deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
		} else {
			animate("#password-invisible", { transform: "translateY(18px) rotateX(90deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
			animate("#password-visible", { transform: "translateY(0px)", opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}
	}, [isPassword]);
	useEffect(() => {
		setChecks(validatePassword(password));
	}, [password]);
	return (
		<>
			<AuthStageTemplate text={locales.auth.sign_up.stages.password_stage.text} primaryText={locales.auth.sign_up.stages.password_stage.primaryText} icon={icons["key"]} />
			<AuthInput
				type={isPassword ? "password" : "text"}
				value={password}
				maxLength={32}
				onChange={element => setPassword(element.target.value)}
				placeholder={locales.auth.sign_up.stages.password_stage.placeholder}
			>
				<div onClick={() => setIsPassword(!isPassword)} className='h-full aspect-square flex justify-center relative items-center'>
					<svg
						id='password-invisible'
						width='36'
						height='36'
						style={{ color: colors.text }}
						className='duration-150 absolute '
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["slashedEye"]} />
					</svg>
					<svg
						id='password-visible'
						width='36'
						height='36'
						style={{ color: colors.text }}
						className='duration-150 absolute opacity-0'
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["eye"]} />
					</svg>
				</div>
			</AuthInput>
			<div className='w-full flex flex-col gap-[0.625rem] mb-4'>
				<AuthSignUpChecks checkDesc={locales.auth.sign_up.stages.password_stage.conditions.lengthValid} idx={1} isCheck={checks.lengthValid} />
				<AuthSignUpChecks checkDesc={locales.auth.sign_up.stages.password_stage.conditions.hasLetters} idx={2} isCheck={checks.hasLetters} />
				<AuthSignUpChecks checkDesc={locales.auth.sign_up.stages.password_stage.conditions.hasSpecialChar} idx={3} isCheck={checks.hasSpecialChar} />
			</div>
			<p style={{ color: colors.textPrimaryTransparent }}>
				{locales.auth.already_have_account}{" "}
				<span className='font-medium' onClick={() => setScreenType("logIn")} style={{ color: colors.text }}>
					{locales.auth.log_in}
				</span>
			</p>
		</>
	);
}
