import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import AuthMainPostSwiping from "./main/postSwiping";
import AuthMainReactions from "./main/reactions";
import { useEffect, useState } from "preact/hooks";
import AuthMainEditor from "./main/editor";
import { animate } from "motion";
import AuthMainGetStarted from "./main/getStarted";
import colors from "../../../constants/colors";

export default function AuthStagesSlider({ stagesType }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			animate("#authStages", { transform: "translateY(-32px) rotateX(-20deg)", opacity: 0 }, { duration: 0.15, easing: "ease-out" }).finished.then(() => {
				setTimeout(() => {
					setCurrentSlide(prevCount => (prevCount >= 3 ? 0 : prevCount + 1));
					animate("#authStages", { transform: "translateY(0px) rotateX(0deg)", opacity: 1 }, { duration: 0.15, easing: "ease-out" });
				}, 200);
			});
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div id='authStages' className={`flex h-full justify-center items-center ${currentSlide == 1 ? '' : 'gap-4'} flex-col animate-[fadeIn_0.2s_ease]`}>
				{currentSlide == 0 ? <AuthMainPostSwiping /> : currentSlide == 1 ? <AuthMainReactions /> : currentSlide == 2 ? <AuthMainEditor /> : <AuthMainGetStarted />}
			</div>
            <div className="w-full px-5 flex justify-center gap-4">
                <span style={currentSlide == 0 ? { background: colors.text, width:'2.5rem' } : {background: colors.textPrimaryTransparent, width:'0.75rem'}} className="rounded-full h-3 duration-150 ease-out"/>
                <span style={currentSlide == 1 ? { background: colors.text, width:'2.5rem' } : {background: colors.textPrimaryTransparent, width:'0.75rem'}} className="rounded-full h-3 duration-150 ease-out"/>
                <span style={currentSlide == 2 ? { background: colors.text, width:'2.5rem' } : {background: colors.textPrimaryTransparent, width:'0.75rem'}} className="rounded-full h-3 duration-150 ease-out"/>
                <span style={currentSlide == 3 ? { background: colors.text, width:'2.5rem' } : {background: colors.textPrimaryTransparent, width:'0.75rem'}} className="rounded-full h-3 duration-150 ease-out"/>
            </div>
		</>
	);
}
