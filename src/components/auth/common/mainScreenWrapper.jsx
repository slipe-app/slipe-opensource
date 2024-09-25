import AuthButton from "./button";

export default function AuthMainScreenWrapper({currentStage}) {
	return (
		<section className='w-screen animate-[fadeIn_0.2s_ease] absolute none top-0 h-screen flex flex-col gap-5 py-5 px-4'>
			<div className='h-full'></div>
			<div className='w-full flex flex-col gap-3'>
				<AuthButton text='Sign up for free' />
				<AuthButton type='secondary' text='Log in' />
			</div>
		</section>
	);
}
