import { PagesContentTypeContext } from "@/hooks/contexts/posts-type";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import { Link } from "react-router";
import icons from "@/components/ui/icons/icons";

export default function StateProfile({ url }) {
	const { activeContent, setActiveContent } = useContext(PagesContentTypeContext);
	const [isShare, setIsShare] = useState(false);

	const changeTab = value => {
		const updatedTab = [...activeContent];
		updatedTab[1] = value;
		setActiveContent(updatedTab);
	};

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
			<div className='rounded-full p-1 relative flex h-14 w-full backdrop-blur-2xl bg-black/[0.12]'>
				<div
					data-isactive={activeContent[1] == "edit"}
					className='absolute data-[isactive=true]:translate-x-full data-[isactive=false]:translate-x-0 duration-200 ease-out w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] rounded-full bg-foreground/[0.12]'
				/>
				<Button
					data-isactive={activeContent[1] == "profile"}
					onClick={() => changeTab("profile")}
					size='full'
					variant='transparent'
					className='h-full bg-transparent data-[isactive=true]:opacity-100 data-[isactive=false]:opacity-50 rounded-full min-h-full'
				>
					Profile
				</Button>
				<Button
					data-isactive={activeContent[1] == "edit"}
					onClick={() => changeTab("edit")}
					size='full'
					variant='transparent'
					className='h-full bg-transparent data-[isactive=true]:opacity-100 data-[isactive=false]:opacity-50 rounded-full min-h-full'
				>
					Edit
				</Button>
			</div>
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
