import AuthSlider from "@/components/shared/auth/welcome/slider";
import { Button } from "@/components/ui/button";

export default function Auth() {
	return (
		<div className='h-full flex flex-col'>
			<div className='flex justify-center items-center h-full w-full'>
				<AuthSlider />
			</div>
			<div className='p-5'>
				<Button size='full'>Start blogging</Button>
			</div>
		</div>
	);
}
