import { useEffect, useState } from "preact/hooks";
import AuthSignUpEmail from "./signUpEmail";
import AuthSignUpPassword from "./signUpPassword";
import AuthSignUpUsername from "./signUpUsername";

export default function AuthSignUpWrapper({ currentSignUpStage, setScreenType }) {
    const [stage, setStage] = useState("email");
    useEffect(() =>{
        setTimeout(() => {
            setStage(currentSignUpStage);
        }, 200);
    }, [currentSignUpStage])
	switch (stage) {
		case "username":
			return <AuthSignUpUsername setScreenType={setScreenType} />;

		case "password":
			return <AuthSignUpPassword setScreenType={setScreenType} />;

		default:
			return <AuthSignUpEmail setScreenType={setScreenType} />;
	}
}
