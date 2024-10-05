import icons from "../../../constants/icons";
import AuthStageTemplate from "../stages/stagesTemplate";
import readLocaleFile from "../../../utils/locales/read";
import colors from "../../../constants/colors";
import AuthInput from "../common/input";
import AuthSignUpChecks from "./components/checks";
import { animate } from "motion";
import { useEffect, useState } from "preact/hooks";

export default function AuthSignUpUsername({ setScreenType }) {
	const locales = readLocaleFile("en");
	const [isFocused, setIsFocused] = useState(false);
	const [username, setUsername] = useState('');	

	useEffect(() =>{
		animate("#usernameLength-counter", isFocused ? { transform: "translateY(0px) rotateX(0deg)", opacity: 1 } : { transform: "translateY(-18px) rotateX(-90deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" });
	}, [isFocused])
	return (
		<>
			<AuthStageTemplate text={locales.auth.sign_up.stages.username_stage.text} primaryText={locales.auth.sign_up.stages.username_stage.primaryText} icon={icons["symbol"]} />
			<AuthInput
				value={username}
				isFocused={(data) => setIsFocused(data)}
				onChange={element => setUsername(element.target.value)}
				maxLength={16}
				inputType="username"
				placeholder={locales.auth.sign_up.stages.username_stage.placeholder}
			>
				<div id="usernameLength-counter" style={{ color: colors.textPrimaryTransparent}} onClick={() => setIsPassword(!isPassword)} className='h-full flex justify-center pl-0 p-[0.9375rem] text-lg relative items-center'>
					{username.length}/16
				</div>
			</AuthInput>
			<div className='w-full flex flex-col gap-[0.625rem] mb-4'>
				<AuthSignUpChecks checkDesc={locales.auth.sign_up.stages.username_stage.conditions.unique} idx={1} isCheck={false} />
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
