import icons from "../../../constants/icons";
import AuthStageTemplate from "../stages/stagesTemplate";
import readLocaleFile from "../../../utils/locales/read";
import AuthInput from "../common/input";
import { default as emailRegex } from "../../../constants/regex/email";
import { useEffect, useState } from "preact/hooks";
import colors from "../../../constants/colors";
import { animate } from "motion";

export default function AuthSignUpEmail({ setScreenType }) {
	const locales = readLocaleFile("en");
	const [email, setEmail] = useState("");
	useEffect(() => {
		if (emailRegex.test(email)) {
			animate("#email-invalid", { transform: 'translateY(-18px) rotateX(-90deg)', opacity: 0 }, { duration: 0.15, easing: "ease-out" });
			animate("#email-valid", { transform: 'translateY(0px)', opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		} else {
			animate("#email-valid", { transform: 'translateY(18px) rotateX(90deg)', opacity: 0 }, { duration: 0.15, easing: "ease-out" });
			animate("#email-invalid", { transform: 'translateY(0px)', opacity: 1 }, { duration: 0.15, easing: "ease-out" });
		}
	}, [email]);
	return (
		<>
			<AuthStageTemplate text={locales.auth.sign_up.stages.email_stage.text} primaryText={locales.auth.sign_up.stages.email_stage.primaryText} icon={icons["email"]} />
			<AuthInput type='email' value={email} maxLength={128} onChange={element => setEmail(element.target.value)} placeholder={locales.auth.sign_up.stages.email_stage.placeholder}>
				<div className='h-full aspect-square flex justify-center relative items-center'>
					<svg id='email-invalid' width='28' height='28' style={{ color: colors.red }} className='duration-150 absolute' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["x"]} />
					</svg>
					<svg id='email-valid' width='28' height='28' style={{ color: colors.green }} className='duration-150 absolute opacity-0' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["checkmark"]} />
					</svg>
				</div>
			</AuthInput>
			<p style={{ color: colors.textPrimaryTransparent }}>
				{locales.auth.already_have_account}{" "}
				<span className='font-medium' onClick={() => setScreenType("logIn")} style={{ color: colors.text }}>
					{locales.auth.log_in}
				</span>
			</p>
		</>
	);
}
