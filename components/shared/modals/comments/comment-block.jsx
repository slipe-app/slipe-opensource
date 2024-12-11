import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import PixelAvatar from "../../pixels-avatar";

export default function CommentBlock({ id, user, content, likes, date }) {
	return (
		<li className='flex flex-col gap-2'>
			<div className='w-full flex gap-3 items-center'>
				<div className='w-full flex gap-3 duration-200 ease-out items-center overflow-hidden'>
					{/* {localUser?.avatar ? ( */}
					<img className='rounded-full min-w-12 object-cover bg-center w-12 h-12' src={`./static/test-assets/hus.png`} />
					{/* ) : (
					<PixelAvatar size={48} username={localUser?.username} pixels={localUser?.pixel_order} />
				)} */}
					<div className='flex flex-col w-full overflow-hidden'>
						<div className='w-full flex gap-1'>
							<div className='whitespace-nowrap overflow-hidden max-w-fit text-ellipsis font-medium text-white'>Husband</div>
						</div>
						<span className='text-sm text-white/50'>23 days ago</span>
					</div>
				</div>
				<Button data-liked={false} className='rounded-full hover:bg-red-foreground bg-white/[0.08] px-4 min-h-11 h-11 text-sm gap-2'>
					<Svg className='!w-6 !h-6' icon={icons["heart"]} />
                    <span>2.45k</span>
				</Button>
			</div>
            <p className="pl-[3.75rem] break-words">
                Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 
            </p>
		</li>
	);
}
