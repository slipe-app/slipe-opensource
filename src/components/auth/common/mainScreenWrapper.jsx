import { useState, useEffect } from "preact/hooks";
import AuthButton from "./button";
import { animate } from "motion";
import readLocaleFile from "../../../utils/locales/read";
import AuthStagesSlider from "../stages/stagesSlider";

export default function AuthMainScreenWrapper({ currentStage = 0, setScreenType, screenType = "main", setCurrentStage }) {
	return (
		<section className='w-screen animate-[fadeIn_0.15s_ease] absolute none top-0 h-screen flex flex-col'>
			<AuthStagesSlider/>
			<div className="w-full px-5 pt-5 pb-8">
				<AuthButton text="Start blogging"/>
			</div>
		</section>
	);
}
