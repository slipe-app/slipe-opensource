import { Image } from "@unpic/preact";
import { animate } from "motion";
import { useEffect } from "preact/hooks";
import colors from "../../../../constants/colors";

export default function AuthMainPostSwiping() {

	return (
		<>
			<div className='w-full flex justify-center items-center relative'>
				<Image width={192} height={288} src='./postsExamples/skibidi.jpg' className='rounded-[1.75rem] scale-[0.825] -rotate-12 opacity-50 mr-40 absolute mb-3' />
				<Image width={192} height={288} src='./postsExamples/s&m.png' className='rounded-[1.75rem] scale-[0.825] rotate-12 ml-40 opacity-50 absolute mb-3' />
				<Image width={192} height={288} src='./postsExamples/banana.jpg' className='rounded-[1.75rem] z-10' />
			</div>
            <div className=" flex flex-col gap-2">
                <span style={{ color: colors.text}} className="text-center text-3xl font-semibold">Better posts swiping</span>
                <span style={{ color: colors.textPrimaryTransparent}} className="text-center text-lg">It's now hundreds of times easier to view posts with our post system</span>
            </div>
		</>
	);
}
