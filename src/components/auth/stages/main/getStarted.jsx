import { Image } from "@unpic/preact";
import { animate } from "motion";
import { useEffect } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";

export default function AuthMainGetStarted() {
	return (
		<>
			<div className='w-full flex justify-center px-5 gap-5'>
				<Image src='postsExamples/skibidi.jpg' width={512} height={512} className='h-40 w-40 scale-[0.6] origin-right brightness-[0.4] rounded-full' />
				<Image src='postsExamples/s&m.png' width={512} height={512} className='h-40 w-40 scale-[0.8] origin-right brightness-[0.7] rounded-full' />
				<Image src='postsExamples/france.jpg' width={512} height={512} className='h-40 w-40 rounded-full' />
				<Image src='postsExamples/popKybi.jpeg' width={512} height={512} className='h-40 w-40 scale-[0.8] origin-left brightness-[0.7] rounded-full' />
				<Image src='postsExamples/banana.jpg' width={512} height={512} className='h-40 w-40 scale-[0.6] origin-right brightness-[0.4] rounded-full' />
			</div>
			<div className=' flex flex-col gap-2 px-5'>
				<span style={{ color: colors.text }} className='text-center text-3xl font-semibold'>
					Easy to get started
				</span>
				<span style={{ color: colors.textPrimaryTransparent }} className='text-center text-lg'>
					Our app has an incredibly low entry threshold, pro, novice, whatever
				</span>
			</div>
		</>
	);
}
