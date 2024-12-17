import { useState } from "react";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import { Link } from "react-router";
import icons from "@/components/ui/icons/icons";
import { toast } from "sonner";

export default function StateProfile({ url }) {
	const [isCopied, setIsCopied] = useState(false);

	const copyLink = () => {
		toast.success("Post link copied!", { className: "bg-green text-green-foreground" });
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2500);
	};
	return (
		<>
			<Button
				data-copied={isCopied}
				onClick={copyLink}
				className='rounded-full data-[copied=true]:pointer-events-none hover:bg-black/35 data-[copied=true]:text-green-foreground relative bg-black/35 backdrop-blur-2xl'
				size='icon'
			>
				<Svg
					data-copied={isCopied}
					icon={icons["link"]}
					className='absolute duration-200 ease-out data-[copied=false]:opacity-100 data-[copied=false]:translate-y-0 data-[copied=true]:translate-y-4 data-[copied=true]:opacity-0 !w-8 !h-8'
				/>
				<Svg
					data-copied={isCopied}
					icon={icons["checkmark"]}
					className='absolute duration-200 data-[copied=true]:opacity-100 data-[copied=false]:opacity-0 data-[copied=false]:-translate-y-4 data-[copied=true]:translate-y-0 ease-out !w-7 !h-7'
				/>
			</Button>
			<Button
				data-isactive={url == "/settings"}
				size='icon'
				asChild
				className='rounded-full data-[isactive=false]:bg-black/35 backdrop-blur-2xl data-[isactive=true]:bg-white data-[isactive=false]:text-white data-[isactive=true]:text-black'
			>
				<Link to='/settings'>
					<Svg className='!w-[1.875rem] !h-[1.875rem]' icon={icons["gear"]} />
				</Link>
			</Button>
		</>
	);
}
