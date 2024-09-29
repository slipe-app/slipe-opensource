import icons from "../../../constants/icons";
import AuthStageTemplate from "../stages/stagesTemplate";
import readLocaleFile from "../../../utils/locales/read";

export default function AuthSignUpUsername() {
    const locales = readLocaleFile("en");
    
    return (
		<>
			<AuthStageTemplate text={locales.auth.sign_up.stages.username_stage.text} primaryText={locales.auth.sign_up.stages.username_stage.primaryText} icon={icons["symbol"]} />
		</>
	);
}
