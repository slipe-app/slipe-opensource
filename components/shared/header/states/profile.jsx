import { useState } from "react";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import { Link } from "react-router";
import icons from "@/components/ui/icons/icons";

export default function StateProfile({ url }) {
	const [isShare, setIsShare] = useState(false);

	return (
		<>
			<Button
				onClick={() => setIsShare(true)}
				data-isactive={isShare}
				size='icon'
				className='rounded-full data-[isactive=false]:bg-black/[0.12] backdrop-blur-2xl data-[isactive=true]:bg-white data-[isactive=false]:text-white data-[isactive=true]:text-black'
			>
				<Svg className='!w-[1.875rem] !h-[1.875rem]' icon={icons["link"]} />
			</Button>
			<Button
				data-isactive={url == "/settings"}
				size='icon'
				asChild
				className='rounded-full data-[isactive=false]:bg-black/[0.12] backdrop-blur-2xl data-[isactive=true]:bg-white data-[isactive=false]:text-white data-[isactive=true]:text-black'
			>
				<Link to='/settings'>
					<Svg className='!w-[1.875rem] !h-[1.875rem]' icon={icons["gear"]} />
				</Link>
			</Button>
		</>
	);
}
