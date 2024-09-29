import { useEffect, useState } from "preact/hooks";
import AuthBackgroundCounter from "../components/auth/common/backgroundCounter";
import AuthMainScreenWrapper from "../components/auth/common/mainScreenWrapper";

export default function Auth() {
	const [currentStage, setCurrentStage] = useState(0);
	const [screenType, setScreenType] = useState("main");
	let interval;

	useEffect(() => {
		interval = setInterval(() => {
			setCurrentStage(prevStage => {
				if (prevStage === 4) {
					return 0;
				} else {
					return prevStage + 1;
				}
			});
		}, 6000);
	}, []);

	useEffect(() => {
		if (screenType !== "main") {
			setCurrentStage(0);
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [screenType]);
	return (
		<>
			<AuthBackgroundCounter screenType={screenType} currentStage={currentStage} stagesArray={screenType === "main" ? [1, 2, 3, 4, 5] : screenType === "signUp" ? [1, 2, 3, 4, 5, 6] : [1]} />
			<AuthMainScreenWrapper setCurrentStage={setCurrentStage} screenType={screenType} setScreenType={setScreenType} currentStage={currentStage} />
		</>
	);
}
