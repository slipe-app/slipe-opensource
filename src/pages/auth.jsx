import { useEffect, useState } from "preact/hooks";
import AuthBackgroundCounter from "../components/auth/common/backgroundCounter";
import AuthMainScreenWrapper from "../components/auth/common/mainScreenWrapper";

export default function Auth() {
	const [currentStage, setCurrentStage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStage(prevStage => {
				if (prevStage === 4) {
					return 0;
				} else {
					return prevStage + 1;
				}
			});
		}, 6000);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<AuthBackgroundCounter currentStage={currentStage} stagesArray={[1, 2, 3, 4, 5]} />
			<AuthMainScreenWrapper currentStage={currentStage} />
		</>
	);
}
