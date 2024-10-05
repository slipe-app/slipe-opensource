import { useEffect, useState } from "preact/hooks";
import AuthMainScreenWrapper from "../components/auth/common/mainScreenWrapper";
import GameOfLife from "../components/auth/common/gameOfLife";

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
			<GameOfLife/>
			<AuthMainScreenWrapper setCurrentStage={setCurrentStage} screenType={screenType} setScreenType={setScreenType} currentStage={currentStage} />
		</>
	);
}
