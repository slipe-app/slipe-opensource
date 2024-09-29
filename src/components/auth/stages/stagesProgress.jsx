import colors from "../../../constants/colors";

export default function AuthStageProgress({ stages, currentStage }) {
	return (
		<div id='stagesProgress' className='w-full flex gap-5'>
			{stages.map(stage => (
				<span key={stage} style={{ background: currentStage + 1 === stage ? colors.text : colors.nonTransparentButtonBg }} className='w-full duration-200 h-[0.4375rem] rounded-full' />
			))}
		</div>
	);
}
