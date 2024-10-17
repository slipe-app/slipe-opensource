import { Image } from "@unpic/preact";
import { useTheme } from "../../../common/contexts/themeContext";

export default function AuthMainGetStarted() {
	const { theme } = useTheme();
	return (
		<>
			<div className='w-full flex justify-center gap-5'>
				<Image src='postsExamples/skibidi.jpg' width={512} height={512} className='h-40 w-40 scale-[0.6] origin-right opacity-40 rounded-full' />
				<Image src='postsExamples/s&m.png' width={512} height={512} className='h-40 w-40 scale-[0.8] origin-right opacity-70 rounded-full' />
				<Image src='postsExamples/france.jpg' width={512} height={512} className='h-40 w-40 rounded-full' />
				<Image src='postsExamples/popKybi.jpeg' width={512} height={512} className='h-40 w-40 scale-[0.8] origin-left opacity-70 rounded-full' />
				<Image src='postsExamples/banana.jpg' width={512} height={512} className='h-40 w-40 scale-[0.6] origin-right opacity-40 rounded-full' />
			</div>
			<div className=' flex flex-col gap-2'>
				<span style={{ color: theme.text }} className='text-center text-3xl font-semibold'>
					Easy to get started
				</span>
				<span style={{ color: theme.textPrimaryTransparent }} className='text-center text-lg'>
					Our app has an incredibly low entry threshold, pro, novice, whatever
				</span>
			</div>
		</>
	);
}
